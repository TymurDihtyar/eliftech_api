// import { Type } from 'class-transformer';
// import {
//   IsDate,
//   IsEnum,
//   IsNotEmpty,
//   IsNumber,
//   IsOptional,
//   IsString,
//   Matches,
//   Min,
// } from 'class-validator';

// import { EWhereHere } from '../../enums/where-here.enum.dto';

export class CreateUserRequestDto {
  // @IsNotEmpty()
  // @IsNumber()
  // @Min(1)
  event_id: number;

  // @IsOptional()
  // @IsString()
  name?: string;

  // @IsNotEmpty()
  // @IsString()
  // @Matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  email?: string;

  // @IsOptional()
  // @IsString()
  // @Matches(/^\d{4}-\d{2}-\d{2}$/, {
  //   message: 'date_birth must be in the format YYYY-MM-DD',
  // })
  birthDate?: Date;

  // @IsNotEmpty()
  // @IsEnum(EWhereHere)
  whereHere?: string;
}
