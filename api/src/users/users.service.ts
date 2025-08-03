import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';
import { users } from 'src/placeholder-data';

@Injectable()
export class UsersService {
  findAll(): UserResponseDto[] {
    return users;
  }

  findOne(id: string): UserResponseDto {
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return user;
  }
}
