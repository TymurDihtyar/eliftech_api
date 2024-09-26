import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserResponseDto } from './dto/res/user.response.dto';
import { CreateUserRequestDto } from './dto/req/create-user.request.dto';
import { UserEventQueryRequestDto } from './dto/req/user-event-query.request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserRequestDto): UserResponseDto {
    return this.usersService.create(createUserDto) as any;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
