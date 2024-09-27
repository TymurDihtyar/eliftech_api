import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from '../dto/req/create-user.request.dto';
import { UserParamsRequestDto } from '../dto/req/user-params.request.dto';
import { UserListResponseDto } from '../dto/res/user-list.response.dto';
import { UserRepository } from '../../repository/services/user.repository';
import { UserNormalizer } from './users.normalaizer';
import { UserResponseDto } from '../dto/res/user.response.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  public async create(dto: CreateUserRequestDto): Promise<UserResponseDto> {
    const userEvent = await this.userRepository.findOneBy({
      email: dto.email,
    });
    if (userEvent && dto.event_id === userEvent.event_id) {
      throw new ConflictException('User already registered on the event');
    }
    const user = await this.userRepository.save(
      this.userRepository.create({ ...dto }),
    );
    return UserNormalizer.toResponseDto(user);
  }

  public async findAllByEventId(
    query: UserParamsRequestDto,
    id: string,
  ): Promise<UserListResponseDto> {
    const [userEntities, total] = await this.userRepository.findAllByEventId(
      query,
      id,
    );
    return UserNormalizer.toListResponseDto(userEntities, total, query);
  }
}
