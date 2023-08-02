import { Injectable } from '@nestjs/common';
import { UserEntity } from '../persistence/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDomain } from 'src/users/domain/user.domain';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  public async create(sign: UserDomain): Promise<void> {
    try {
      const newUser = this.usersRepository.create(sign.returnValue());
      await this.usersRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }
}
