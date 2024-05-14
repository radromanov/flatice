import z from "zod";
import { CATEGORIES } from ".";

//

const id = z.string().min(1);
const type = z.enum(["spending", "bill", "goal", "emergency"]);
const amount = z.number().positive();
const ownerId = z.string().min(1);
const createdAt = z.string();
const updatedAt = z.string();
type ExpenseType = z.infer<typeof type>;

//

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
