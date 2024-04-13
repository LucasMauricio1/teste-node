import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser';
import { User } from './entity/userEntity';
import { usersData } from 'src/database/usersData';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = {
      ...createUserDto,
      id: usersData.length + 1,
    };

    usersData.push(user);

    return user;
  }

  async getAllUser(): Promise<User[]> {
    return usersData;
  }
}
