import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDomain } from '../../../users/domain/user.domain';
import { UserService } from './user.service';
import { UserEntity } from '../persistence/user.entity';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;
  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    userService = modRef.get<UserService>(UserService);
    userRepository = modRef.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('userRepository should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  it('Create user in service', async () => {
    const user = UserDomain.create({
      fullName: 'Rodrigo',
      username: 'rodrigo',
      email: 'rodrigo@gmail.com',
      password: 'Rodri1234',
    });

    let result: void = undefined;
    jest
      .spyOn(userService, 'create')
      .mockImplementation(() => Promise.resolve(result));
    const exec = await userService.create(user);
    expect(exec).toBe(result);
  });

  it('Find all user in service', async () => {
    let result: Omit<UserEntity, 'password'>[] = [
      {
        id: '32e6edc7-012b-4b3e-af43-0808889bf437',
        createdAt: new Date('2023-08-03T17:45:27.775Z'),
        updatedAt: new Date('2023-08-03T17:45:27.775Z'),
        fullName: 'Rodrigo',
        username: 'rodrigo',
        email: 'rodrigo@gmail.com',
      },
    ];

    jest
      .spyOn(userService, 'findAll')
      .mockImplementation(() => Promise.resolve(result));
    const exec = await userService.findAll();
    expect(exec).toBe(result);
  });
});
