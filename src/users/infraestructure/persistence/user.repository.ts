import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../users/domain/user.repository';
import { UserService } from '../services/user.service';
import { UserDomain } from '../../../users/domain/user.domain';
import { UserEntity } from './user.entity';

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(private readonly service: UserService) {}

  async create(user: UserDomain): Promise<void> {
    await this.service.create(user);
  }

  async findAll(): Promise<Omit<UserEntity,'password'>[]> {
    return await this.service.findAll()
  }
}
