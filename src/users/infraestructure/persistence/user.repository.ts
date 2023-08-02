import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/user.repository';
import { UserService } from '../services/user.service';
import { UserDomain } from 'src/users/domain/user.domain';

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(private readonly service: UserService) {}

  async create(user: UserDomain): Promise<void> {
    await this.service.create(user);
  }
}
