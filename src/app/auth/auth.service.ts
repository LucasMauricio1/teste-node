import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { usersData } from 'src/database/usersData';
import { ReturnUserDto } from '../user/dto/returnUser.dto';
import { ReturnLogin } from './dto/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<ReturnLogin | null> {
    const user = usersData.find((user) => user.email === loginDto.email);
    if (!user) {
      return null;
    }
    if (user.password === loginDto.password) {
      const payload = { userId: user.id, type: user.type };

      const accessToken = this.jwtService.sign(payload);

      return {
        accessToken,
        user: new ReturnUserDto(user),
      };
    } else {
      return null;
    }
  }
}
