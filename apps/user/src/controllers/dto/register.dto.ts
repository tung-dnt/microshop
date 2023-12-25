import { IsEmail, IsString } from 'class-validator'

export class RegisterDto {
  @IsString()
    firstname: string

  @IsString()
    lastname: string

  @IsEmail()
    email: string

  @IsString()
    password: string

  @IsString()
    username: string
}
