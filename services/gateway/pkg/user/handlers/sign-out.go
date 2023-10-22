package handlers

import (
	"context"

	"example.com/api-gateway/pkg/user/pb"
	"github.com/gofiber/fiber/v2"
)

func SignOut(ctx *fiber.Ctx, c pb.User_ServiceClient) error {
	refreshToken := ctx.Get("Authorization")
	_, err := c.SignOut(context.Background(), &pb.RefreshTokenMessage{
		RefreshToken: refreshToken,
	})
	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return ctx.JSON(fiber.Map{
		"message": "Sign out successfully",
	})
}
