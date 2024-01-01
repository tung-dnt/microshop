import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Secured, User  } from '@shared/providers'
import { UserProfile } from '@shared/types'
import { UserService } from 'src/user/user.service'


@ApiTags('users')
// @Controller({
//   path: 'users',
//   version: '1'
// })
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Secured()
  async getUserProfile(@User() user: UserProfile) {
    return user
  }

  @Get('serialize')
  async serializeUserFromKeycloakId(@Query('keycloakId') id: string) {
    return this.userService.findByKeycloakId(id)
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() data) {
    return this.userService.insert(data)
  }
}
