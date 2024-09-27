import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UserParamsRequestDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  page: number;

  @Type(() => String)
  @IsString()
  sortBy: string;
}
