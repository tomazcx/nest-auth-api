import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator"

export class SignupDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsString()
	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(20)
	password: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(20)
	confirmPassword: string
}
