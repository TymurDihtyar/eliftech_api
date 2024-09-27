import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigType, PostgresConfig } from '../../configs/config.type';
import * as process from 'process';
import * as path from 'path';

@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<ConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const postgresConfig = this.configService.get<PostgresConfig>('postgres');
    return {
      type: 'postgres',
      host: postgresConfig.host,
      port: postgresConfig.port,
      username: postgresConfig.user,
      password: postgresConfig.password,
      database: postgresConfig.dbName,
      entities: [
        path.join(process.cwd(), 'dist', 'database', 'entities', '*.entity.js'),
      ],
      synchronize: false,
    };
  }
}
