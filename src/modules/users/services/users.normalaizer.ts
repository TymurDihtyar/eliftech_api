import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../database/entities/user.entity';
import { UserParamsRequestDto } from '../dto/req/user-params.request.dto';
import { UserListResponseDto } from '../dto/res/user-list.response.dto';
import { UserResponseDto } from '../dto/res/user.response.dto';

@Injectable()
export class UserNormalizer {
  public static toResponseDto(userEntity: UserEntity): UserResponseDto {
    return {
      event_id: userEntity.event_id,
      name: userEntity.name,
      email: userEntity.email,
      birthDate: userEntity.birthDate,
      whereHear: userEntity.whereHear,
    };
  }
  public static toListResponseDto(
    userEntities: UserEntity[],
    total: number,
    query: UserParamsRequestDto,
  ): UserListResponseDto {
    return {
      users: userEntities.map(this.toResponseDto),
      meta: {
        page: query.page,
        total,
      },
    };
  }
}
