import type { TransformFnParams } from 'class-transformer'
import { Transform } from 'class-transformer'
import { IsString } from 'class-validator'
import isString from 'lodash/isString'

const transform = ({ value }: TransformFnParams) => isString(value) ? value : value[0]

export class RegisterDto {
  @Transform(transform)
  @IsString()
    keycloakId: string

  @Transform(transform)
  @IsString()
    firstName: string

  @Transform(transform)
  @IsString()
    lastName: string

  @Transform(transform)
  @IsString()
    email: string

  @Transform(transform)
  @IsString()
    realm: string

  @Transform(transform)
  @IsString()
    username: string
}
