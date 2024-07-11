import { Request, Response, NextFunction } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../domain/user.schema';
import { faker } from '@faker-js/faker';

describe('UserController', () => {
  let userController: UserController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  const mockUserService = {
    getAll: jest.fn(),
    create: jest.fn(),
  } as unknown as UserService;

  beforeEach(() => {
    userController = new UserController(mockUserService);
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;
  });

  describe('getAll', () => {
    test('should return status 200 and users array', async () => {
      const user1: User = {
        id: faker.number.int(),
        name: faker.person.fullName(),
        status: 1,
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
      };
      const user2: User = {
        id: faker.number.int(),
        name: faker.person.fullName(),
        status: 1,
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
      };

      (mockUserService.getAll as jest.Mock).mockResolvedValue([user1, user2]);

      await userController.getAll(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        error: null,
        data: [user1, user2],
      });
    });
  });

  describe('create', () => {
    test('should return status 200 and success message', async () => {
      const userData = {
        name: faker.person.fullName(),
      };

      (mockUserService.create as jest.Mock).mockResolvedValue(undefined);

      req.body = userData;

      await userController.create(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        error: null,
        data: 'Successfully created user',
      });
    });
  });

});