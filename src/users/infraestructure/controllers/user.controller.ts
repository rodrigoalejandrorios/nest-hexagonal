import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/createUser.dto';
import { UserCreate } from 'src/users/application/create/users.create';

@Controller('users')
export class UserController {
  constructor(private readonly userCreator: UserCreate) {}

  @Post('create')
  public async create(@Body() user: CreateUserDTO) {
    return this.userCreator.execute(user);
  }
}
