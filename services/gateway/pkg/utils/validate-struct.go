package utils

import "github.com/go-playground/validator/v10"

func ValidateStruct(body interface{}) error {
	validate := validator.New()
	err := validate.Struct(body)
	return err
}
