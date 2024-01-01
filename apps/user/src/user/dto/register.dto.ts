import { IsEmail, IsString } from 'class-validator'

export class RegisterDto {
  @IsString()
    keycloakId: string

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
