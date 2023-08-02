import { Injectable } from '@nestjs/common';
import { UserDomain } from 'src/users/domain/user.domain';
import { UserRepository } from 'src/users/domain/user.repository';
import { User } from 'src/users/domain/users.interface';

@Injectable()
export class UserCreate {
  constructor(private readonly repository: UserRepository) {}

  public async execute(request: User): Promise<void> {
    const user = UserDomain.create(request);
    await this.repository.create(user);
  }
}
