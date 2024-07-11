import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error.handler";
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');

export const configureApp = (prefix: string) => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.use(prefix, routes());
  app.use(errorMiddleware);

  return app;
};
