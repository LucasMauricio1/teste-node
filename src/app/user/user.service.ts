import { HttpStatus, Injectable } from '@nestjs/common';
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

  async getUserById(userId: number): Promise<User> {
    const user = usersData.find((user) => user.id === Number(userId));
    return user;
  }

  async deleteUserById(
    userId: number,
  ): Promise<{ status: number; message: string }> {
    const userIndex = usersData.findIndex((user) => user.id === Number(userId));
    if (userIndex === -1) {
      const message = `Usuário com ID ${userId} não encontrado.`;
      console.log(message);
      return { status: HttpStatus.NOT_FOUND, message };
    }

    usersData.splice(userIndex, 1);
    return { status: HttpStatus.OK, message: 'Usuário deletado com sucesso.' };
  }
}
