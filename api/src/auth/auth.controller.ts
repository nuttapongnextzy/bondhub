import {
  Body,
  Controller,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body('email') email: string) {
    console.log(`login: ${email}`);
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(`Email not found`);
    }
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
