import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from '../memory.store';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  signup(username: string, password: string, role: 'admin' | 'customer') {
    if (users.has(username)) {
      throw new Error('User exists');
    }

    const user = {
      id: randomUUID(),
      username,
      password,
      role
    };

    users.set(username, user);
    return user;
  }

  login(username: string, password: string) {
    const user = users.get(username);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    return {
      token: this.jwt.sign({
        sub: user.id,
        role: user.role,
        username: user.username
      })
    };
  }
}
