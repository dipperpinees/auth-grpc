package main

import (
	"os"

	"example.com/api-gateway/configs"
	"example.com/api-gateway/pkg/user"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New(fiber.Config{})

	_configs := &configs.Configs{
		PORT:             os.Getenv("PORT"),
		AUTH_SERVICE_URL: os.Getenv("AUTH_SERVICE_URL"),
	}

	app.Use(cors.New())

	userRoutes := app.Group("/user")
	user.RegisterRoutes(&userRoutes, _configs)

	app.Listen(":" + _configs.PORT)
}
