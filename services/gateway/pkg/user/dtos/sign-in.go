package dtos

type SignInBody struct {
	Password string `json:"password" validate:"required"`
	Email    string `json:"email" validate:"required"`
}
