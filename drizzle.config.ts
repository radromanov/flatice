import "./load-env";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  schema: "./lib/drizzle/schema.ts",
  out: "./lib/drizzle/migrations",
});
