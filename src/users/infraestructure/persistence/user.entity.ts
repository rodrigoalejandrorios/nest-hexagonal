import { Exclude } from 'class-transformer';
import { User } from 'src/users/domain/users.interface';
import { BaseEntity } from '../../../shared/infraestructure/persistence/base.entity';
import { Column, Entity } from 'typeorm';

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
