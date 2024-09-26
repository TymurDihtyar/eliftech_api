import { IsDate, IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';
import { EWhereHere } from '../../enums/whereHere.enum.dto';

export class CreateUserRequestDto {
  // @IsNotEmpty()
  // @IsNumber()
  // @Min(1)
  // event_id: number;

  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  email: string;

  @IsDate()
  birthDate: string;

  @IsNotEmpty()
  @IsEnum(EWhereHere)
  whereHere: string;
}
