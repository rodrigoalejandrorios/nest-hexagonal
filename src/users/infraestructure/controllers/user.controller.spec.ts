import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserDomain } from '../../../users/domain/user.domain';
import { UserCreate } from '../../../users/application/create/users.create';
import { UsersFindAll } from '../../../users/application/find-all/users.find-all';
import { UserEntity } from '../persistence/user.entity';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserCreate,
          useValue: {
            create: jest.fn(),
          },
        },
        {
          provide: UsersFindAll,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Create user in controller', async () => {
    const user = UserDomain.create({
      fullName: 'Rodrigo',
      username: 'rodrigo',
      email: 'rodrigo@gmail.com',
      password: 'Rodri1234',
    });

    let result: void;
    jest
      .spyOn(controller, 'create')
      .mockImplementation(() => Promise.resolve(result));

    expect(await controller.create(user)).toBe(result);
  });

  it('Find all user in controller', async () => {
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
      .spyOn(controller, 'findAll')
      .mockImplementation(() => Promise.resolve(result));

    expect(await controller.findAll()).toBe(result);
  });
});
