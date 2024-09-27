import { Global, Module } from '@nestjs/common';
import { UserRepository } from './services/user.repository';
import { EventRepository } from './services/events.repository';

const repositories = [UserRepository, EventRepository];
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
