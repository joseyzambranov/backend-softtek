import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error.handler";

export const configureApp = (prefix: string) => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(prefix, routes());
  app.use(errorMiddleware);

  return app;
};
