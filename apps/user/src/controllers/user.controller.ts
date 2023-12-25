import { Body, Controller, Get, Post } from '@nestjs/common'

import { ApiTags } from '@nestjs/swagger'
import { UserService } from '../providers/user.service'
import { RegisterDto } from './dto/register.dto'

@Controller('users')
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  // @Get('profile')
  // async getUserProfile(@Query() query: Prisma.UsersWhereUniqueInput) {
  //   return this.userService.findUnique(query)
  // }

  @Get()
  async getAll() {
    console.log('test')
    return this.userService.findMany()
  }

  @Post()
  async createUser(@Body() data: RegisterDto) {
    return this.userService.insert(data)
  }
}
