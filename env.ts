import dotenv from "dotenv";
import z from "zod";

const EnvSchema = z.object({
  SERVER_PORT: z.number().positive(),
  MORGAN: z.enum(["dev", "common", "short", "tiny", "combined"]),
});

type TEnv = z.infer<typeof EnvSchema>;

export default class Env {
  private config: TEnv;
  private schema: z.ZodSchema;

  constructor() {
    dotenv.config({
      path: process.env.NODE_ENV ? "./.env.production" : "./.env.local",
    });

    this.schema = EnvSchema;
    this.config = this.init();
  }

  get() {
    return this.config;
  }

  getOne<T extends keyof TEnv>(key: T) {
    return this.config[key];
  }

  private init() {
    return this.schema.parse({
      SERVER_PORT: Number(process.env.SERVER_PORT),
      MORGAN: process.env.MORGAN,
    });
  }
}
