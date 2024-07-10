import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { routes } from "./routes";

export const configureApp = (prefix: string) => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(helmet());

  app.use(prefix, routes());

  return app;
};
