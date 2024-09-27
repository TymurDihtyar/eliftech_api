import { Injectable } from '@nestjs/common';
import { EventEntity } from '../../../database/entities/event.entity';
import { EventResponseDto } from '../dto/res/event.response.dto';
import { EventListResponseDto } from '../dto/res/event-list.response.dto';
import { EventParamsRequestDto } from '../dto/req/event-params.request.dto';

@Injectable()
export class EventsNormalaizer {
  public static oneEventResponseDto(
    eventEntity: EventEntity,
  ): EventResponseDto {
    return {
      id: eventEntity.id,
      created_at: eventEntity.created_at,
      title: eventEntity.title,
      description: eventEntity.description,
      organizer: eventEntity.organizer,
      date: eventEntity.date,
    };
  }
  public static eventsResponseDto(
    eventEntities: EventEntity[],
    total: number,
    query: EventParamsRequestDto,
  ): EventListResponseDto {
    return {
      events: eventEntities.map(this.oneEventResponseDto),
      meta: {
        page: query.page,
        total,
      },
    };
  }
}
