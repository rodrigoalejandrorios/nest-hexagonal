import { User } from './users.interface';

export abstract class UserRepository {
  abstract create(sign: User): Promise<void>;
}
