import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { toUserResponseDto } from './user.mapper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<UserResponseDto[]> {
    return this.prisma.user
      .findMany()
      .then((users) => users.map((user) => toUserResponseDto(user)));
  }

  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return toUserResponseDto(user);
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.findOne(id);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: dto,
    });

    return toUserResponseDto(updatedUser)
  }
}
