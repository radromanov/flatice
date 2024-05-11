import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from ".";

export const ExpressConfig = () => {
  const MORGAN = env.init().getOne("MORGAN");

  const app = express();

  app.use(morgan(MORGAN));
  app.use(helmet());

  return app;
};
