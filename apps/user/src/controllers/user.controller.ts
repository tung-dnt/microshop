import { Body, Controller, Get, Post, Query } from '@nestjs/common'

import { ApiTags } from '@nestjs/swagger'
import { UserService } from '../providers/user.service'
import { RegisterDto } from './dto/register.dto'

@Controller('users')
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('profile')
  async getUserProfile(@Query() query: RegisterDto) {
    return this.userService.findFirst(query)
  }

  @Post()
  async createUser(@Body() data: RegisterDto) {
    return this.userService.insert(data)
  }
}
