import { NextFunction, Request, Response } from "express";
import { swapiService } from "./swapi.service";


export class SwapiController {

  getAllPeople = async (req: Request, res: Response, next: NextFunction) => {
    try {
    
      const data = await swapiService.getAllPeople();

      return res.status(200).json({
        ok: true,
        error: null,
        data: data,
      });
    } catch (error) {
      next(error);
    }
  };
}
export const swapiController = new SwapiController();
