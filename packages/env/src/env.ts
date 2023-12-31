import { Type } from 'class-transformer'
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test'
}

export class DbConfig {
  @IsString()
    host: string

  @IsNumber()
    port: number

  @IsString()
    user: string

  @IsString()
    password: string
}

export class GlobalEnv {
  @IsEnum(Environment)
  @IsOptional()
    env: Environment

  @ValidateNested()
  @Type(() => DbConfig)
    dbConfig: DbConfig
}
