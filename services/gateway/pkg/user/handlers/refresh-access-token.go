package handlers

import (
	"context"

	"example.com/api-gateway/pkg/user/pb"
	"github.com/gofiber/fiber/v2"
)

func RefreshAccessToken(ctx *fiber.Ctx, c pb.User_ServiceClient) error {
	refreshToken := ctx.Get("Authorization")
	accessToken, err := c.RefreshAccessToken(context.Background(), &pb.RefreshTokenMessage{
		RefreshToken: refreshToken,
	})
	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return ctx.JSON(&accessToken)
}
