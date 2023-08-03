import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../users/domain/user.repository';
import { UserEntity } from '../../../users/infraestructure/persistence/user.entity';

@Injectable()
export class UsersFindAll {
  constructor(private readonly repository: UserRepository) {}

  public async execute(): Promise<Omit<UserEntity,'password'>[]> {
    return await this.repository.findAll();
  }
}
