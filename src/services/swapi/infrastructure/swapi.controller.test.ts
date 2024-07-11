import { Request, Response, NextFunction } from 'express';
import { PEOPLE_MOCK_DATA } from '../../../shared/mock/people-mock-data';
import { SwapiController } from './swapi.controller';
import { swapiService } from './swapi.service';

describe('SwapiController', () => {
  let swapiController: SwapiController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  const mockSwapiService = {
    getAllPeople: jest.fn(),
  };

  beforeEach(() => {
    swapiController = new SwapiController();
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;

    jest.spyOn(swapiService, 'getAllPeople').mockImplementation(mockSwapiService.getAllPeople);
  });

  describe('getAllPeople', () => {
    test('should return status 200 and data', async () => {
      const peopleData = PEOPLE_MOCK_DATA;
      (swapiService.getAllPeople as jest.Mock).mockResolvedValue(peopleData);

      await swapiController.getAllPeople(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        data: peopleData,
        error: null,
      });
    });

    test('should call next with error if service throws an error', async () => {
      const error = new Error('Test error');
      (swapiService.getAllPeople as jest.Mock).mockRejectedValue(error);

      await swapiController.getAllPeople(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
