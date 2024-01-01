import {
  IsEmail,
  IsString
} from 'class-validator'

export class RegisterDto {
  @IsString()
    id: string

  @IsString()
    firstname: string

  @IsString()
    lastname: string

  @IsEmail()
    email: string

  @IsString()
    realm: string

  @IsString()
    username: string
}
