import { GlobalEnv } from '@shared/env/dist'
import { Type } from 'class-transformer'
import {
  IsIP,
  IsObject,
  IsPort,
  IsString,
  ValidateNested
} from 'class-validator'

class TCPEnv {
  @IsIP()
    host: string

  @IsPort()
    port: string
}
export class Env extends GlobalEnv {
  @Type(() => TCPEnv)
  @IsObject()
  @ValidateNested()
    tcp: TCPEnv

  @IsString()
    dbName: string
}