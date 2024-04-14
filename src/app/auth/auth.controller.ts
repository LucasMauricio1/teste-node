import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ReturnLogin } from './dto/returnLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() loginDto: LoginDto): Promise<ReturnLogin> {
    const user = await this.authService.login(loginDto);
    if (!user) {
      throw new UnauthorizedException('E-mail ou senha incorretos.');
    }
    return user;
  }
}
