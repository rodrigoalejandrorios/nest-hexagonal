import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../persistence/user.entity';
import { UserDomain } from '../../../users/domain/user.domain';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  public async create(sign: UserDomain): Promise<void> {
    try {
      const newUser = this.usersRepository.create(sign.returnValue());
      newUser.password = await bcrypt.hash(newUser.password, 10);
      await this.usersRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findAll(): Promise<Omit<UserEntity,'password'>[]> {
    try {
      return await this.usersRepository.createQueryBuilder().getMany();
    } catch (error) {
      throw new Error(error);
    }
  }
}
