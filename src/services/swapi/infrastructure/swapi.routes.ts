import { Router } from 'express';
import { swapiController } from './swapi.controller';

export const configureSwapiRoutes = () => {
  const router = Router();

  router.get('/', swapiController.getAllPeople);

  return router;
};