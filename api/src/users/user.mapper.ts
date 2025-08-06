import { User } from "generated/prisma";
import { UserResponseDto } from "./dto/user-response.dto";

export function toUserResponseDto(user: User): UserResponseDto {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    nickname: user.nickname,
    bio: user.bio,
    status: user.status,
    profileImage: user.profileImage ?? '',
  };
}