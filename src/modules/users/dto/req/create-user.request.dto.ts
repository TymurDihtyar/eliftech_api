import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Min,
} from 'class-validator';
import { EWhereHere } from '../../enums/whereHere.enum.dto';
import { Type } from 'class-transformer';

export class CreateUserRequestDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  event_id: number;

  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  email: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  birthDate: Date;

  @IsNotEmpty()
  @IsEnum(EWhereHere)
  whereHear: string;
}
