import { Injectable } from '@nestjs/common';
import { UserDomain } from '../../../users/domain/user.domain';
import { UserRepository } from '../../../users/domain/user.repository';
import { User } from '../../../users/domain/users.interface';

@Injectable()
export class UserCreate {
  constructor(private readonly repository: UserRepository) {}

  public async execute(request: User): Promise<void> {
    const user = UserDomain.create(request);
    await this.repository.create(user);
  }
}
