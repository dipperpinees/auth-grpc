package handlers

import (
	"example.com/api-gateway/pkg/user/pb"
	"github.com/gofiber/fiber/v2"
)

func Auth(ctx *fiber.Ctx, c pb.User_ServiceClient) error {
	return ctx.JSON(ctx.Locals("user"))
}
