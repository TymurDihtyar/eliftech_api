import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EventEntity } from '../../../database/entities/event.entity';
import { EventParamsRequestDto } from '../../events/dto/req/event-params.request.dto';

@Injectable()
export class EventRepository extends Repository<EventEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(EventEntity, dataSource.manager);
  }

  async findAll(
    query: EventParamsRequestDto,
  ): Promise<[EventEntity[], number]> {
    const eventsOnPage = 12;
    const allowedSortFields = ['title', 'date', 'organizer'];

    const queryBuilder = this.createQueryBuilder('event')
      .take(eventsOnPage)
      .skip((query.page - 1) * eventsOnPage);

    if (query.sortBy) {
      const order = query.sortBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

      if (allowedSortFields.includes(query.sortBy)) {
        queryBuilder.orderBy(`event.${query.sortBy}`, order);
      }
    }

    const totalEventsCount = await this.createQueryBuilder('event').getCount();

    const totalPages = Math.ceil(totalEventsCount / eventsOnPage);
    const events = await queryBuilder.getMany();

    return [events, totalPages];
  }
}
