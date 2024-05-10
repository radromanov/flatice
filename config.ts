import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import Env from "./env";

const ExpressConfig = () => {
  const env = new Env();
  const MORGAN = env.getOne("MORGAN");

  const app = express();

  app.use(morgan(MORGAN));
  app.use(helmet());

  return app;
};

export default ExpressConfig;
