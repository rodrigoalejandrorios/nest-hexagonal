import { UserEntity } from '../infraestructure/persistence/user.entity';
import { User } from './users.interface';

export abstract class UserRepository {
  abstract create(sign: User): Promise<void>;
  abstract findAll(): Promise<Omit<UserEntity,'password'>[]>
}
