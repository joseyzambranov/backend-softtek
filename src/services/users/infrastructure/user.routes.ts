import { Router } from 'express';
import { userController } from './user.controller';

export const configureUserRoutes = () => {
  const router = Router();

  router.get('/', userController.getAll);
  router.post('/', userController.create);

  return router;
};