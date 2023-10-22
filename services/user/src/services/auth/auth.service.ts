import { User } from "@prisma/client";
import { SignInRequest__Output } from "@proto/user/SignInRequest";
import { SignUpRequest__Output } from "@proto/user/SignUpRequest";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Inject, Service } from "typedi";
import { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } from "../../configs";
import PrismaService from "../prisma/prisma.service";
import { UserService } from "../../user";

@Service()
export default class AuthService {
    constructor(
        @Inject() private readonly prismaService: PrismaService, 
        @Inject() private readonly userService: UserService,
    ) {}

    private createHashedPassword(password: string) {
        return bcrypt.hashSync(password, 10)
    }

    private createAccessToken(user: User) {
        return jwt.sign({ email: user.email, id: user.id}, JWT_ACCESS_TOKEN_SECRET, {expiresIn: "4h"});
    }

    private async createRefreshToken(user: User) {
        const refreshToken = jwt.sign({ email: user.email, id: user.id}, JWT_REFRESH_TOKEN_SECRET);
        await this.createSession(user.id, refreshToken)
        return refreshToken;
    }


    private async createSession(userId: number, refreshToken: string) {
        return await this.prismaService.session.create({
            data: {
                refreshToken,
                userId
            }
        })
    }

    async validateAccessToken(accessToken: string) {
        const decoded = jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET) as User;
        const user = await this.userService.getUserById(decoded.id);
        if (!user) throw new Error("User not found");
        return user;
    }

    async getNewAccessToken(refreshToken: string) {
        const currentSession = await this.prismaService.session.findUnique({
            where: {
                refreshToken,
                active: true
            }
        })
        if (!currentSession) {
            throw new Error(`Your session is invalid!!!`);
        }
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_TOKEN_SECRET) as User;
        const user = await this.userService.getUserById(decoded.id);
        if (!user) throw new Error(`User with id ${decoded.email} not found`);
        return this.createAccessToken(user);
    }

    async signUp(user: SignUpRequest__Output) {
        const hashedPassword = this.createHashedPassword(user.password);

        const _user = await this.userService.createUser({
            email: user.email,
            password: hashedPassword,
            name: user.name,
        })

        const accessToken = this.createAccessToken(_user);
        const refreshToken = await this.createRefreshToken(_user);
        return {
            accessToken,
            refreshToken
        }
    }

    async signIn(user: SignInRequest__Output) {
        const _user = await this.userService.getUserByEmail(user.email);
        if (!_user) throw new Error(`User ${user.email} not found`)

        if (!bcrypt.compareSync(user.password, _user.password)) {
            throw new Error("Wrong password")
        }
        const accessToken = this.createAccessToken(_user);
        const refreshToken = await this.createRefreshToken(_user);
        return {
            accessToken,
            refreshToken
        }
    }

    async signOut(refreshToken: string) {
        return await this.prismaService.session.update({
            where: {
                refreshToken
            },
            data: {
                active: false
            }
        })
    }
}