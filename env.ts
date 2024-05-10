import dotenv from "dotenv";
import z from "zod";

const EnvSchema = z.object({
  SERVER_PORT: z.number().positive(),
  MORGAN: z.enum(["dev", "common", "short", "tiny", "combined"]),
});

type TEnv = z.infer<typeof EnvSchema>;

const env = {
  init: (schema = EnvSchema) => {
    dotenv.config({
      path: process.env.NODE_ENV ? "./.env.production" : "./.env.local",
    });

    const config = schema.parse({
      SERVER_PORT: Number(process.env.SERVER_PORT),
      MORGAN: process.env.MORGAN,
    });

    const get = () => config;
    const getOne = <T extends keyof TEnv>(key: T) => config[key];

    return { get, getOne };
  },
};

export default env;
