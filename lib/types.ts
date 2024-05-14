import z from "zod";
import { CATEGORIES, PREFIX } from ".";
import { AuthService } from "../backend/api/auth/auth.service";
import { ExpenseService } from "../backend/api/expenses/expenses.service";

//
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

const id = z.string().min(1);
const type = z.enum(["spending", "bill", "goal", "emergency"]);
const amount = z.number().positive();
const ownerId = z.string().min(1);
const createdAt = z.string();
const updatedAt = z.string();
type ExpenseType = z.infer<typeof type>;

type FunctionNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type Service<T> = {
  [K in FunctionNames<T>]: T[K];
};
//
export type Api<T> = Service<T>;

export type QueryOpts<T> = {
  method?: HTTPMethod;
  body?: unknown;
  schema?: z.ZodType<T>;
  headers?: any;
};

export const ExpenseInsert = z.object({
  type,
  amount,
  ownerId,
});

export type Expense = z.infer<typeof ExpenseSelect>;
export const ExpenseSelect = z.object({
  id,
  createdAt,
  updatedAt,
  type,
  amount,
  ownerId,
});

export type ExpenseInsert = z.infer<typeof ExpenseInsert>;
export type ExpenseSelect = z.infer<typeof ExpenseSelect>;

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categories: (typeof CATEGORIES)[ExpenseType];
};
