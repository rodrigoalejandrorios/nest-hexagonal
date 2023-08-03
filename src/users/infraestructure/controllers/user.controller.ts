import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dto/createUser.dto';
import { UserCreate } from '../../application/create/users.create';
import { UsersFindAll } from '../../../users/application/find-all/users.find-all';
import { UserEntity } from '../persistence/user.entity';

@Controller('users')
export class UserController {
  constructor(
    private readonly userCreator: UserCreate,
    private readonly userFindAll: UsersFindAll,
  ) {}

  @Post('create')
  public async create(@Body() user: CreateUserDTO) {
    return this.userCreator.execute(user);
  }

  @Get('all')
  public async findAll(): Promise<Omit<UserEntity,'password'>[]> {
    return this.userFindAll.execute();
  }
}
