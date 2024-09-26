import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class UserEventQueryRequestDto {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  event_id: number;
}
