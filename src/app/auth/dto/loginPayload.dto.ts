import { User } from 'src/app/user/entity/userEntity';

export class LoginPayload {
  id: number;
  type: string;

  constructor(user: User) {
    this.id = user.id;
    this.type = user.type;
  }
}
