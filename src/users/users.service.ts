import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: '654321',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);

    return {
      ...user,
      id: this.users.length,
    };
  }
}
