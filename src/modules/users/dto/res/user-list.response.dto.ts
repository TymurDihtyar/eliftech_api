import { UserResponseDto } from './user.response.dto';

export class UserListResponseDto {
  users: UserResponseDto[];
  meta: {
    page: number;
    total: number;
  };
}
