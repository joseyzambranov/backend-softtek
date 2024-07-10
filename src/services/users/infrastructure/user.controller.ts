import { NextFunction, Request, Response } from "express";
export class UserController {
  constructor() {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({
        ok: true,
        error: null,
        data: "users",
      });
    } catch (error) { next(error);}
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      ok: true,
      error: null,
      data: "users",
    });
  };
}

export const userController = new UserController();
