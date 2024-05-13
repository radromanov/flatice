import z from "zod";
import { CATEGORIES } from ".";

export type ExpenseType = "spending" | "bill" | "goal" | "emergency";
export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: ExpenseType;
  amount: number;
  ownerId: string;
};
export const ExpenseInsertSchema = z.object({
  type: z.enum(["spending", "bill", "goal", "emergency"]),
  amount: z.number().min(1).positive(),
  ownerId: z.string().min(1).max(16),
});
export type ExpenseInsertSchema = z.infer<typeof ExpenseInsertSchema>;

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categories: (typeof CATEGORIES)[ExpenseType];
};
