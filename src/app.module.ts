import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [UsersModule, EventsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
