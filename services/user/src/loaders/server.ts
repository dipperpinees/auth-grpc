import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '@proto/user';
import path from 'path';
import { Service } from 'typedi';
import AuthServiceHandler from '../services/auth/auth.handler';
import { PORT } from '../configs';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../../../proto/user.proto'));
const proto = grpc.loadPackageDefinition(
    packageDefinition
) as unknown as ProtoGrpcType;

@Service()
export default class GrpcServer {
    private server = new grpc.Server();
    constructor(private readonly authService: AuthServiceHandler) {}

    private addService() {
        this.server.addService(proto.user.User_Service.service, this.authService)
    }

    public start() {
        this.addService();
        this.server.bindAsync(
            `0.0.0.0:${PORT}`,
            grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if (err) {
                    throw new Error(`Auth service error: ${err.message}`);
                } else {
                    console.log(`Auth service started on port: ${port}`);
                    this.server.start();
                }
            }
        );
    }
}
