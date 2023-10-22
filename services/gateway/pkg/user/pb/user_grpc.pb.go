// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.12.4
// source: user.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	User_Service_SignUp_FullMethodName             = "/user.User_Service/signUp"
	User_Service_SignIn_FullMethodName             = "/user.User_Service/signIn"
	User_Service_VerifyAccessToken_FullMethodName  = "/user.User_Service/verifyAccessToken"
	User_Service_RefreshAccessToken_FullMethodName = "/user.User_Service/refreshAccessToken"
	User_Service_SignOut_FullMethodName            = "/user.User_Service/signOut"
)

// User_ServiceClient is the client API for User_Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type User_ServiceClient interface {
	SignUp(ctx context.Context, in *SignUpRequest, opts ...grpc.CallOption) (*AuthResponse, error)
	SignIn(ctx context.Context, in *SignInRequest, opts ...grpc.CallOption) (*AuthResponse, error)
	VerifyAccessToken(ctx context.Context, in *AccessTokenMessage, opts ...grpc.CallOption) (*User, error)
	RefreshAccessToken(ctx context.Context, in *RefreshTokenMessage, opts ...grpc.CallOption) (*AccessTokenMessage, error)
	SignOut(ctx context.Context, in *RefreshTokenMessage, opts ...grpc.CallOption) (*VerifyTokenMessage, error)
}

type user_ServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUser_ServiceClient(cc grpc.ClientConnInterface) User_ServiceClient {
	return &user_ServiceClient{cc}
}

func (c *user_ServiceClient) SignUp(ctx context.Context, in *SignUpRequest, opts ...grpc.CallOption) (*AuthResponse, error) {
	out := new(AuthResponse)
	err := c.cc.Invoke(ctx, User_Service_SignUp_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *user_ServiceClient) SignIn(ctx context.Context, in *SignInRequest, opts ...grpc.CallOption) (*AuthResponse, error) {
	out := new(AuthResponse)
	err := c.cc.Invoke(ctx, User_Service_SignIn_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *user_ServiceClient) VerifyAccessToken(ctx context.Context, in *AccessTokenMessage, opts ...grpc.CallOption) (*User, error) {
	out := new(User)
	err := c.cc.Invoke(ctx, User_Service_VerifyAccessToken_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *user_ServiceClient) RefreshAccessToken(ctx context.Context, in *RefreshTokenMessage, opts ...grpc.CallOption) (*AccessTokenMessage, error) {
	out := new(AccessTokenMessage)
	err := c.cc.Invoke(ctx, User_Service_RefreshAccessToken_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *user_ServiceClient) SignOut(ctx context.Context, in *RefreshTokenMessage, opts ...grpc.CallOption) (*VerifyTokenMessage, error) {
	out := new(VerifyTokenMessage)
	err := c.cc.Invoke(ctx, User_Service_SignOut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// User_ServiceServer is the server API for User_Service service.
// All implementations must embed UnimplementedUser_ServiceServer
// for forward compatibility
type User_ServiceServer interface {
	SignUp(context.Context, *SignUpRequest) (*AuthResponse, error)
	SignIn(context.Context, *SignInRequest) (*AuthResponse, error)
	VerifyAccessToken(context.Context, *AccessTokenMessage) (*User, error)
	RefreshAccessToken(context.Context, *RefreshTokenMessage) (*AccessTokenMessage, error)
	SignOut(context.Context, *RefreshTokenMessage) (*VerifyTokenMessage, error)
	mustEmbedUnimplementedUser_ServiceServer()
}

// UnimplementedUser_ServiceServer must be embedded to have forward compatible implementations.
type UnimplementedUser_ServiceServer struct {
}

func (UnimplementedUser_ServiceServer) SignUp(context.Context, *SignUpRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignUp not implemented")
}
func (UnimplementedUser_ServiceServer) SignIn(context.Context, *SignInRequest) (*AuthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignIn not implemented")
}
func (UnimplementedUser_ServiceServer) VerifyAccessToken(context.Context, *AccessTokenMessage) (*User, error) {
	return nil, status.Errorf(codes.Unimplemented, "method VerifyAccessToken not implemented")
}
func (UnimplementedUser_ServiceServer) RefreshAccessToken(context.Context, *RefreshTokenMessage) (*AccessTokenMessage, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RefreshAccessToken not implemented")
}
func (UnimplementedUser_ServiceServer) SignOut(context.Context, *RefreshTokenMessage) (*VerifyTokenMessage, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignOut not implemented")
}
func (UnimplementedUser_ServiceServer) mustEmbedUnimplementedUser_ServiceServer() {}

// UnsafeUser_ServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to User_ServiceServer will
// result in compilation errors.
type UnsafeUser_ServiceServer interface {
	mustEmbedUnimplementedUser_ServiceServer()
}

func RegisterUser_ServiceServer(s grpc.ServiceRegistrar, srv User_ServiceServer) {
	s.RegisterService(&User_Service_ServiceDesc, srv)
}

func _User_Service_SignUp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignUpRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(User_ServiceServer).SignUp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Service_SignUp_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(User_ServiceServer).SignUp(ctx, req.(*SignUpRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Service_SignIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignInRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(User_ServiceServer).SignIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Service_SignIn_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(User_ServiceServer).SignIn(ctx, req.(*SignInRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Service_VerifyAccessToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccessTokenMessage)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(User_ServiceServer).VerifyAccessToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Service_VerifyAccessToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(User_ServiceServer).VerifyAccessToken(ctx, req.(*AccessTokenMessage))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Service_RefreshAccessToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshTokenMessage)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(User_ServiceServer).RefreshAccessToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Service_RefreshAccessToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(User_ServiceServer).RefreshAccessToken(ctx, req.(*RefreshTokenMessage))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Service_SignOut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshTokenMessage)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(User_ServiceServer).SignOut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Service_SignOut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(User_ServiceServer).SignOut(ctx, req.(*RefreshTokenMessage))
	}
	return interceptor(ctx, in, info, handler)
}

// User_Service_ServiceDesc is the grpc.ServiceDesc for User_Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var User_Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "user.User_Service",
	HandlerType: (*User_ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "signUp",
			Handler:    _User_Service_SignUp_Handler,
		},
		{
			MethodName: "signIn",
			Handler:    _User_Service_SignIn_Handler,
		},
		{
			MethodName: "verifyAccessToken",
			Handler:    _User_Service_VerifyAccessToken_Handler,
		},
		{
			MethodName: "refreshAccessToken",
			Handler:    _User_Service_RefreshAccessToken_Handler,
		},
		{
			MethodName: "signOut",
			Handler:    _User_Service_SignOut_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user.proto",
}