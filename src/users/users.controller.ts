import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('role') role: Role,
  ) {
    return this.usersService.register(username, password, role);
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.usersService.validateUser(username, password);

    if (!user) {
      return { message: 'Invalid credentials' };
    }

    return {
      message: 'Login successful',
      role: user.role,
      username: user.username,
    };
  }
}
