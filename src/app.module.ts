import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/infraestructure/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './shared/infraestructure/persistence/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UsersModule,
  ],
})
export class AppModule {}
