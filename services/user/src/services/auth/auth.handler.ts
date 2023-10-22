import { ServerUnaryCall } from "@grpc/grpc-js";
import { AccessTokenMessage, AccessTokenMessage__Output } from "@proto/user/AccessTokenMessage";
import { AuthResponse, AuthResponse__Output } from "@proto/user/AuthResponse";
import { RefreshTokenMessage__Output } from "@proto/user/RefreshTokenMessage";
import { SignInRequest__Output } from "@proto/user/SignInRequest";
import { SignUpRequest__Output } from "@proto/user/SignUpRequest";
import { User_ServiceHandlers } from "@proto/user/User_Service";
import { VerifyTokenMessage, } from "@proto/user/VerifyTokenMessage";
import { Inject, Service } from "typedi";
import { UnaryCall } from "../../decorators";
import UserService from "./auth.service";
import { GrantAccessGithubOAuthRequest__Output } from "@proto/user/GrantAccessGithubOAuthRequest";
import { GrantAccessGithubOAuthResponse } from "@proto/user/GrantAccessGithubOAuthResponse";
import { User } from "@proto/user/User";
import { GetOAuthAccessRequest__Output } from "@proto/user/GetOAuthAccessRequest";
import { GetOAuthAccessResponse } from "@proto/user/GetOAuthAccessResponse";
import dateToTimestamp from "../../utils/dateToTimestamp";

@Service()
export default class AuthServiceHandler implements User_ServiceHandlers {
    [key: string]: any;
    constructor(
        @Inject() private readonly userService: UserService,
    ) {}

    @UnaryCall()
    async signUp({request}: ServerUnaryCall<SignUpRequest__Output, AuthResponse>): Promise<AuthResponse__Output> {
        const response = await this.userService.signUp(request);
        return response;
    }

    @UnaryCall()
    async signIn({request}: ServerUnaryCall<SignInRequest__Output, AuthResponse>): Promise<AuthResponse__Output> {
        const response = await this.userService.signIn(request);
        return response;
    }

    @UnaryCall()
    async refreshAccessToken({request}: ServerUnaryCall<RefreshTokenMessage__Output, AccessTokenMessage>): Promise<AccessTokenMessage> {
        const accessToken = await this.userService.getNewAccessToken(request.refreshToken);
        return {
            accessToken
        };
    }

    @UnaryCall()
    async verifyAccessToken({request}: ServerUnaryCall<AccessTokenMessage__Output, User>): Promise<User> {
        const user = await this.userService.validateAccessToken(request.accessToken);
        return {
            id: user.id,
            email: user.email,
            name: user.name || undefined
        }
    }

    @UnaryCall()
    async signOut({request}: ServerUnaryCall<RefreshTokenMessage__Output, VerifyTokenMessage>): Promise<VerifyTokenMessage> {
        await this.userService.signOut(request.refreshToken);
        return {
            success: true
        }
    }

    @UnaryCall()
    async grantAccessGithubOAuth({request}: ServerUnaryCall<GrantAccessGithubOAuthRequest__Output, GrantAccessGithubOAuthResponse>): Promise<GrantAccessGithubOAuthResponse> {
        await this.oauthService.githubOAuth(request.userId, request.code);
        return {
            message: "Grant access OAuth successfully"
        }
    }
}