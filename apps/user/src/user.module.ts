import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { JwtService } from '@nestjs/jwt'

import { DatabaseModule } from '@shared/database'
import configuration from '../env'
import { UserService } from './providers/user.service'
import { UserRepository } from './providers/user.repository'
import { ProvinceService } from './providers/province.service'
import { UserController } from './controllers/user.controller'

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule.forRoot({
      user: 'root',
      host: 'localhost',
      database: 'postgres',
      password: 'password',
      port: 5433
    })
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
