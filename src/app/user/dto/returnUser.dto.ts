import { User } from '../entity/userEntity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  type: string;

  constructor(userEntity: User) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.type = userEntity.type;
  }
}
