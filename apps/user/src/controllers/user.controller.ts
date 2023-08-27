import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Prisma } from '@prisma/user'
import { UserService } from '../providers/user.service'

@Controller('users')
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get('profile')
  async getUserProfile(@Query() query: Prisma.UsersWhereUniqueInput) {
    return this.userService.findUnique(query)
  }
}
