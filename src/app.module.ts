import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import { EventsModule } from './modules/events/events.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configs/config';
import { PostgresModule } from './modules/postgres/postgres.module';
import { RepositoryModule } from './modules/repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    PostgresModule,
    RepositoryModule,
    UsersModule,
    EventsModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
