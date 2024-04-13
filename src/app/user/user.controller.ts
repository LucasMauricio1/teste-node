import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser';
import { UserService } from './user.service';
import { User } from './entity/userEntity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return await this.userService.getAllUser();
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<User> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }
    return user;
  }

  @Delete('/:userId')
  async deleteUserById(@Param('userId') userId: number): Promise<any> {
    const result = await this.userService.deleteUserById(userId);
    if (!result) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }
    return { message: result.message };
  }

  @Patch('/:userId')
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    const user = await this.userService.updateUser(userId, updateUserDto);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }
    return user;
  }
}
