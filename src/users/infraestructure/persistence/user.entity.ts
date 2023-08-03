import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { User } from 'src/users/domain/users.interface';
import { BaseEntity } from '../../../shared/infraestructure/persistence/base.entity';

@Entity('users')
export class UserEntity extends BaseEntity implements User {
  @Column()
  fullName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;
}
