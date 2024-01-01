import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Permissions,User } from '@shared/providers'
import { UserPermission, UserProfile } from '@shared/types'
import { UserService } from 'src/user/user.service'

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Permissions(UserPermission.EDIT_PRODUCTS)
  @Get('profile')
  async getUserProfile(@User() user: UserProfile) {
    if (!user) return null

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
