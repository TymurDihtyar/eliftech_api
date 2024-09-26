import { EventResponseDto } from './event.response.dto';

export class EventListResponseDto {
  events: EventResponseDto[];
  meta: {
    page: number;
    total: number;
  };
}
