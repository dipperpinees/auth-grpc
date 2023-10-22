package user

import (
	"log"

	"example.com/api-gateway/configs"
	"example.com/api-gateway/pkg/user/pb"
	"google.golang.org/grpc"
)

type ServiceClient struct {
	Client pb.User_ServiceClient
}

func InitServiceClient(c *configs.Configs) pb.User_ServiceClient {
	cc, err := grpc.Dial(c.AUTH_SERVICE_URL, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to connect user service client: %s", err)
	}

	return pb.NewUser_ServiceClient(cc)
}
