package user

import (
	"context"

	"example.com/api-gateway/pkg/user/pb"
	"github.com/gofiber/fiber/v2"
)

func InitAuthMiddleware(c *pb.User_ServiceClient) func(*fiber.Ctx) error {
	return func(ctx *fiber.Ctx) error {
		accessToken := ctx.Get("Authorization")
		user, err := (*c).VerifyAccessToken(context.Background(), &pb.AccessTokenMessage{
			AccessToken: accessToken,
		})
		if err != nil {
			return ctx.Status(fiber.ErrUnauthorized.Code).JSON(fiber.Map{
				"error": "Unauthorized",
			})
		}
		ctx.Locals("user", user)
		ctx.Next()
		return nil
	}
}
