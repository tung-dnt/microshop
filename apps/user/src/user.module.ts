import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { DatabaseModule } from '@shared/database'
import UserDbConfig from '@shared/database/configs/user.config'
import { EnvModule } from '@shared/env/dist'
import { Env } from 'types/env'

import configuration from '../env'

import { UserController } from './controllers/user.controller'
import { ProvinceService } from './providers/province.service'
import { UserRepository } from './providers/user.repository'
import { UserService } from './providers/user.service'

@Module({
  imports: [
    EnvModule.register({
      env: process.env.NODE_ENV,
      class: Env
    }),
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule.forRoot(UserDbConfig.dbCredentials)
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    JwtService,
    UserRepository,
    ProvinceService,
  ],
})

export class UserModule {
}
