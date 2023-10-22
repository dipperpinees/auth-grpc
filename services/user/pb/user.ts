import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { User_ServiceClient as _user_User_ServiceClient, User_ServiceDefinition as _user_User_ServiceDefinition } from './user/User_Service';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    AccessTokenMessage: MessageTypeDefinition
    AuthResponse: MessageTypeDefinition
    RefreshTokenMessage: MessageTypeDefinition
    SignInRequest: MessageTypeDefinition
    SignUpRequest: MessageTypeDefinition
    User: MessageTypeDefinition
    User_Service: SubtypeConstructor<typeof grpc.Client, _user_User_ServiceClient> & { service: _user_User_ServiceDefinition }
    VerifyTokenMessage: MessageTypeDefinition
  }
}

