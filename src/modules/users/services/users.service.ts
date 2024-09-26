import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/req/update-user.dto';
import { CreateUserRequestDto } from '../dto/req/create-user.request.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserRequestDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
