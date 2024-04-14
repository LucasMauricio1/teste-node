import { Injectable } from '@nestjs/common';
import { User } from '../user/entity/userEntity';
import { LoginDto } from './dto/login.dto';
import { usersData } from 'src/database/usersData';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<User | null> {
    const user = usersData.find((user) => user.email === loginDto.email);
    if (!user) {
      return null;
    }
    if (user.password === loginDto.password) {
      return user;
    } else {
      return null;
    }
  }
}
