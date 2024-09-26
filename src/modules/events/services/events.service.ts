import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/req/create-event.request.dto';
import { EventListRequestDto } from '../dto/req/event-list.request.dto';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: EventListRequestDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
