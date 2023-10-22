package handlers

import (
	"context"

	"example.com/api-gateway/pkg/user/dtos"
	"example.com/api-gateway/pkg/user/pb"
	"example.com/api-gateway/pkg/utils"
	"github.com/gofiber/fiber/v2"
)

func SignUp(ctx *fiber.Ctx, c pb.User_ServiceClient) error {
	body := new(dtos.SignUpBody)
	if err := ctx.BodyParser(body); err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := utils.ValidateStruct(body); err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	response, err := c.SignUp(context.Background(), &pb.SignUpRequest{
		Email:    body.Email,
		Password: body.Password,
		Name:     body.Name,
	})

	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return ctx.JSON(&dtos.Auth{
		AccessToken:  response.AccessToken,
		RefreshToken: response.RefreshToken,
	})
}
