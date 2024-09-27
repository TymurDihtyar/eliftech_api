import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserResponseDto } from './dto/res/user.response.dto';
import { CreateUserRequestDto } from './dto/req/create-user.request.dto';
import { UserParamsRequestDto } from './dto/req/user-params.request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserRequestDto): Promise<UserResponseDto> {
    return this.usersService.create(dto);
  }

  @Get(':id')
  findAll(@Param('id') id: string, @Query() query: UserParamsRequestDto) {
    return this.usersService.findAllByEventId(query, id);
  }
}
