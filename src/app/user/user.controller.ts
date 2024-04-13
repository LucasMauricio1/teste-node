import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
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
    return await this.userService.getUserById(userId);
  }

  @Delete('/:userId')
  async deleteUserById(@Param('userId') userId: number): Promise<any> {
    const result = await this.userService.deleteUserById(userId);
    if (result.status === HttpStatus.NOT_FOUND) {
      throw new NotFoundException(result.message);
    }
    return { message: result.message };
  }
}
