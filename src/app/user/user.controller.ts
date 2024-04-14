import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser';
import { UserService } from './user.service';
import { User } from './entity/userEntity';
import { ReturnUserDto } from './dto/returnUser.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userService.createUser(createUserDto);
    if (!newUser) {
      throw new ConflictException('E-mail já cadastrado.');
    }
    return newUser;
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
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
