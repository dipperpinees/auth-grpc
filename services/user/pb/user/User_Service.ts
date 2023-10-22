// Original file: ../../proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AccessTokenMessage as _user_AccessTokenMessage, AccessTokenMessage__Output as _user_AccessTokenMessage__Output } from '../user/AccessTokenMessage';
import type { AuthResponse as _user_AuthResponse, AuthResponse__Output as _user_AuthResponse__Output } from '../user/AuthResponse';
import type { RefreshTokenMessage as _user_RefreshTokenMessage, RefreshTokenMessage__Output as _user_RefreshTokenMessage__Output } from '../user/RefreshTokenMessage';
import type { SignInRequest as _user_SignInRequest, SignInRequest__Output as _user_SignInRequest__Output } from '../user/SignInRequest';
import type { SignUpRequest as _user_SignUpRequest, SignUpRequest__Output as _user_SignUpRequest__Output } from '../user/SignUpRequest';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { VerifyTokenMessage as _user_VerifyTokenMessage, VerifyTokenMessage__Output as _user_VerifyTokenMessage__Output } from '../user/VerifyTokenMessage';

export interface User_ServiceClient extends grpc.Client {
  refreshAccessToken(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  refreshAccessToken(argument: _user_RefreshTokenMessage, callback: grpc.requestCallback<_user_AccessTokenMessage__Output>): grpc.ClientUnaryCall;
  
  signIn(argument: _user_SignInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signIn(argument: _user_SignInRequest, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  
  signOut(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  signOut(argument: _user_RefreshTokenMessage, callback: grpc.requestCallback<_user_VerifyTokenMessage__Output>): grpc.ClientUnaryCall;
  
  signUp(argument: _user_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _user_SignUpRequest, callback: grpc.requestCallback<_user_AuthResponse__Output>): grpc.ClientUnaryCall;
  
  verifyAccessToken(argument: _user_AccessTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  verifyAccessToken(argument: _user_AccessTokenMessage, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface User_ServiceHandlers extends grpc.UntypedServiceImplementation {
  refreshAccessToken: grpc.handleUnaryCall<_user_RefreshTokenMessage__Output, _user_AccessTokenMessage>;
  
  signIn: grpc.handleUnaryCall<_user_SignInRequest__Output, _user_AuthResponse>;
  
  signOut: grpc.handleUnaryCall<_user_RefreshTokenMessage__Output, _user_VerifyTokenMessage>;
  
  signUp: grpc.handleUnaryCall<_user_SignUpRequest__Output, _user_AuthResponse>;
  
  verifyAccessToken: grpc.handleUnaryCall<_user_AccessTokenMessage__Output, _user_User>;
  
}

export interface User_ServiceDefinition extends grpc.ServiceDefinition {
  refreshAccessToken: MethodDefinition<_user_RefreshTokenMessage, _user_AccessTokenMessage, _user_RefreshTokenMessage__Output, _user_AccessTokenMessage__Output>
  signIn: MethodDefinition<_user_SignInRequest, _user_AuthResponse, _user_SignInRequest__Output, _user_AuthResponse__Output>
  signOut: MethodDefinition<_user_RefreshTokenMessage, _user_VerifyTokenMessage, _user_RefreshTokenMessage__Output, _user_VerifyTokenMessage__Output>
  signUp: MethodDefinition<_user_SignUpRequest, _user_AuthResponse, _user_SignUpRequest__Output, _user_AuthResponse__Output>
  verifyAccessToken: MethodDefinition<_user_AccessTokenMessage, _user_User, _user_AccessTokenMessage__Output, _user_User__Output>
}
