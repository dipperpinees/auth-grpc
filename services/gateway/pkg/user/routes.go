package user

import (
	"example.com/api-gateway/configs"
	"example.com/api-gateway/pkg/user/handlers"
	"github.com/gofiber/fiber/v2"
)

func RegisterRoutes(r *fiber.Router, c *configs.Configs) *ServiceClient {
	router := *r
	svc := &ServiceClient{
		Client: InitServiceClient(c),
	}
	a := InitAuthMiddleware(&svc.Client)

	router.Post("sign-up", svc.SignUp)
	router.Post("sign-in", svc.SignIn)
	router.Post("sign-out", svc.SignOut)
	router.Post("auth", a, svc.Auth)
	router.Post("refresh-access-token", svc.RefreshAccessToken)

	return svc
}

func (svc *ServiceClient) SignUp(ctx *fiber.Ctx) error {
	return handlers.SignUp(ctx, svc.Client)
}

func (svc *ServiceClient) SignIn(ctx *fiber.Ctx) error {
	return handlers.SignIn(ctx, svc.Client)
}

func (svc *ServiceClient) Auth(ctx *fiber.Ctx) error {
	return handlers.Auth(ctx, svc.Client)
}

func (svc *ServiceClient) RefreshAccessToken(ctx *fiber.Ctx) error {
	return handlers.RefreshAccessToken(ctx, svc.Client)
}

func (svc *ServiceClient) SignOut(ctx *fiber.Ctx) error {
	return handlers.SignOut(ctx, svc.Client)
}
