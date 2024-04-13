import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser';
import { User } from './entity/userEntity';
import { usersData } from 'src/database/usersData';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    const existingUser = usersData.find(
      (user) => user.email === createUserDto.email,
    );
    if (existingUser) {
      return null;
    }

    const user: User = {
      ...createUserDto,
      id: usersData.length + 1,
    };

    usersData.push(user);

    return {
      ...user,
      password: undefined,
    };
  }

  async getAllUser(): Promise<User[]> {
    return usersData;
  }

  async getUserById(userId: number): Promise<User | null> {
    const user = usersData.find((user) => user.id === Number(userId));
    return user || null;
  }

  async deleteUserById(
    userId: number,
  ): Promise<{ status: number; message: string } | null> {
    const userIndex = usersData.findIndex((user) => user.id === Number(userId));
    if (userIndex === -1) {
      return null;
    }

    usersData.splice(userIndex, 1);
    return { status: HttpStatus.OK, message: 'Usuário deletado com sucesso.' };
  }

  async updateUser(
    userId: number,
    updateUserDto: Partial<User>,
  ): Promise<User | null> {
    const userIndex = usersData.findIndex((user) => user.id === Number(userId));
    if (userIndex === -1) {
      return null;
    }

    const updatedUser = { ...usersData[userIndex], ...updateUserDto };
    usersData[userIndex] = updatedUser;
    return updatedUser;
  }
}
