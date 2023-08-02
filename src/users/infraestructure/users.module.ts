import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './persistence/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserRepository } from '../domain/user.repository';
import { TypeOrmUserRepository } from './persistence/user.repository';
import { UserCreate } from '../application/create/users.create';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: UserRepository, useClass: TypeOrmUserRepository },
    UserCreate,
  ],
})
export class UsersModule {}
