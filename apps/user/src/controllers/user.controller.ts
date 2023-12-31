import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Permissions } from '@shared/providers'
import {
  UserPermission
} from '@shared/types'
import { UserService } from 'src/providers/user.service'

import { RegisterDto } from './dto/register.dto'

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Permissions(UserPermission.EDIT_PRODUCTS)
  @Get('profile')
  async getUserProfile() {
    return { success: true }
  }

  @Get('serialize')
  async serializeUserFromKeycloakId(@Param('keycloakId') id: string) {
    return this.userService.findByKeycloakId(id)
  }

  @Post()
  async createUser(@Body() data: RegisterDto) {
    return this.userService.insert(data)
  }
}
