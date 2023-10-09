import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '.prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUser(): Promise<UserModel | null> {
    return this.userService.user({
      id: 1,
    });
  }
}
