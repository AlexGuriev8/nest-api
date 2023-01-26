import { JwtGuard } from './../auth/guard/jwt.guard';
import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  async getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser() {}
}
