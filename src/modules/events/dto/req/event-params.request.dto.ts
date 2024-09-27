import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ESortEventsBy } from '../../enums/sortBy.enum.dto';

export class EventParamsRequestDto {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  page: number;

  @IsOptional()
  @IsString()
  @IsEnum(ESortEventsBy)
  sortBy: string;
}
