import { BaseDTO } from 'src/shared/infraestructure/dto/base.dto';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { User } from 'src/users/domain/users.interface';

export class CreateUserDTO extends BaseDTO implements User {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
