import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { EventParamsRequestDto } from './dto/req/event-params.request.dto';
import { EventListResponseDto } from './dto/res/event-list.response.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  public async findAll(
    @Query() query: EventParamsRequestDto,
  ): Promise<EventListResponseDto> {
    return await this.eventsService.findAll(query);
  }
}
