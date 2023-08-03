import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersFindAll } from './users.find-all';
import { UserEntity } from '../../../users/infraestructure/persistence/user.entity';
import { UserRepository } from '../../../users/domain/user.repository';

describe('UsersFindAll', () => {
  let userFindAll: UsersFindAll;
  let userRepository: UserRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(getRepositoryToken(UserEntity));
    userFindAll = new UsersFindAll(userRepository);
  });

  it('should be defined', () => {
    expect(userFindAll).toBeDefined();
  });
});
