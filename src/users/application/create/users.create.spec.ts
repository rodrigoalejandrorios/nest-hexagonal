import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../infraestructure/persistence/user.entity';
import { UserRepository } from '../../domain/user.repository';
import { UserCreate } from './users.create';

describe('UsersFindAll', () => {
  let userCreate: UserCreate;
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
    userCreate = new UserCreate(userRepository);
  });

  it('should be defined', () => {
    expect(userCreate).toBeDefined();
  });
});
