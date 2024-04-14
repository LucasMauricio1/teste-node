import { ReturnUserDto } from 'src/app/user/dto/returnUser.dto';

export class ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}
