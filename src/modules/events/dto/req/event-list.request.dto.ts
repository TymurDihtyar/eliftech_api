import { Type } from 'class-transformer';
import { IsDate, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class EventListRequestDto {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @IsOptional()
  page: number;

  @IsString()
  @IsOptional()
  title: string;

  @IsDate()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  organizer: string;

  @Type(() => String)
  @IsString()
  @IsOptional()
  sortBy: string;
}
