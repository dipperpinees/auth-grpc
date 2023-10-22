import { Prisma } from "@prisma/client";
import { Inject, Service } from "typedi";
import { PrismaService } from "../services/prisma";

@Service()
export default class UserService {
    constructor(@Inject() private readonly prismaService: PrismaService) {}

    async createUser(user: Prisma.UserCreateInput) {
        return await this.prismaService.user.create({
            data: user
        })
    }

    async getUserById(id: number) {
        return await this.prismaService.user.findUnique({
            where: {id},
        })
    }

    async getUserByEmail(email: string) {
        return await this.prismaService.user.findUnique({
            where: {email},
        })
    }
}