import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../../../database/entities/user.entity';
import { UserParamsRequestDto } from '../../users/dto/req/user-params.request.dto';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.manager);
  }

  async findAllByEventId(
    query: UserParamsRequestDto,
    eventId: string,
  ): Promise<[UserEntity[], number]> {
    const usersOnPage = 12;

    const allowedSortFields = ['name', 'email', 'birthDate'];

    const queryBuilder = this.createQueryBuilder('user')
      .where('user.event_id = :eventId', { eventId })
      .take(usersOnPage)
      .skip((query.page - 1) * usersOnPage);

    if (query.sortBy) {
      const [sortField, sortOrder] = query.sortBy.split(':');
      const order =
        sortOrder && sortOrder.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

      if (allowedSortFields.includes(sortField)) {
        queryBuilder.orderBy(`user.${sortField}`, order);
      }
    }

    const totalUsersCount = await this.createQueryBuilder('user')
      .where('user.event_id = :eventId', { eventId })
      .getCount();

    const totalPages = Math.ceil(totalUsersCount / usersOnPage);
    const users = await queryBuilder.getMany();

    return [users, totalPages];
  }
}
