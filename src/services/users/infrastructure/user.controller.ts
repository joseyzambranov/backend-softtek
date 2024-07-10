import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { validateUserInput } from "../domain/user.schema";
export class UserController {
  userService: UserService;

  constructor(userService:UserService) {
    this.userService= userService
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query;
      const users = await this.userService.getAll(query);

      return res.status(200).json({
        ok: true,
        error: null,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const data = await validateUserInput(body);
      const users = await this.userService.create(data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Successfully created user',
      });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(new UserService);
