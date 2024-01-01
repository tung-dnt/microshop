import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { AUTH_GUARD_ENDPOINT } from '@shared/constants'
import { DatabaseModule } from '@shared/database'
import UserDbConfig from '@shared/database/configs/user.config'
import { EnvModule } from '@shared/env'
import { AuthGuard } from '@shared/providers'
import { Env } from 'types/env'

import configuration from '../env'

import { ProvinceService } from './province/province.service'
import { UserController } from './user/user.controller'
import { UserRepository } from './user/user.repository'
import { UserService } from './user/user.service'

const AuthGuardService = [
  {
    provide: AUTH_GUARD_ENDPOINT,
    // TODO: remove hard-coded url
    useValue: 'http://localhost:5000/api/v1/users/serialize',
  },
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }
]

@Module({
  imports: [
    HttpModule,
    DatabaseModule.forRoot(UserDbConfig.dbCredentials),
    EnvModule.register({
      env: process.env.NODE_ENV,
      class: Env
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ configuration ],
    }),
  ],
  controllers: [ UserController ],
  providers: [
    UserService,
    UserRepository,
    ProvinceService,
    JwtService,
    ...AuthGuardService
  ],
})

export class UserModule {
}
