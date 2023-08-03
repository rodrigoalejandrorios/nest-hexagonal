import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../../users/infraestructure/persistence/user.entity';
import { TypeOrmUserRepository } from './user.repository';
import { UserService } from '../services/user.service';

describe('TypeOrmUserRepository', () => {
  let tormRepository: TypeOrmUserRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
          },
        },
        TypeOrmUserRepository,
      ],
    }).compile();

    tormRepository = module.get<TypeOrmUserRepository>(
      TypeOrmUserRepository,
    );
  });

  it('should be defined', () => {
    expect(tormRepository).toBeDefined()
  });
});
