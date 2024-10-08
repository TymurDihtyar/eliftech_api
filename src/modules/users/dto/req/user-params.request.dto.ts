import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ESortUserBy } from '../../enums/sortBy.enum.dto';

export class UserParamsRequestDto {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  page: number;

  @IsOptional()
  @IsString()
  @IsEnum(ESortUserBy)
  sortBy: string;
}
