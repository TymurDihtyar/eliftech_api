// import { Type } from 'class-transformer';
// import { IsDate, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class EventListRequestDto {
  // @Type(() => Number)
  // @IsInt()
  // @Min(0)
  page: number;

  // @IsString()
  title: string;

  // @IsDate()
  date: string;

  // @IsString()
  organizer: string;

  // @Type(() => String)
  // @IsString()
  sortBy: string;
}
