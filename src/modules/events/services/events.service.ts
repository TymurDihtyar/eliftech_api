import { Injectable } from '@nestjs/common';
import { EventRepository } from '../../repository/services/events.repository';
import { EventParamsRequestDto } from '../dto/req/event-params.request.dto';
import { EventListResponseDto } from '../dto/res/event-list.response.dto';
import { EventsNormalaizer } from './events.normalaizer';

@Injectable()
export class EventsService {
  constructor(private eventRepository: EventRepository) {}
  public async findAll(
    query: EventParamsRequestDto,
  ): Promise<EventListResponseDto> {
    const [eventsEntities, total] = await this.eventRepository.findAll(query);
    return EventsNormalaizer.eventsResponseDto(eventsEntities, total, query);
  }
}
