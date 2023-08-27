import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { APP_GUARD } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { PrismaModule } from '@shared/prisma'

import configuration from '../env'
import { PrismaService } from './providers/prisma.service'
import { UserService } from './providers/user.service'
import { UserRepository } from './providers/user.repository'
import { ProvinceService } from './providers/province.service'
import { UserController } from './controllers/user.controller'
import { AuthGuard } from './providers/auth.guard'

@Module({
  imports: [
    HttpModule,
    PrismaModule.forRoot({
      isGlobal: true,
      providers: [PrismaService]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    JwtService,
    UserRepository,
    ProvinceService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})

export class UserModule {
}
