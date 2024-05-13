import z from "zod";
import { CATEGORIES, PREFIX } from ".";

export type Prefix = (typeof PREFIX)[keyof typeof PREFIX];

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
  amount: z.number().positive(),
  ownerId: z.string().min(1),
});
export const ExpenseSelectSchema = z.array(
  z.object({
    id: z.string().min(1),
    createdAt: z.string(),
    updatedAt: z.string(),
    type: z.enum(["spending", "bill", "goal", "emergency"]),
    amount: z.number().positive(),
    ownerId: z.string().min(1),
  })
);
export type ExpenseInsertSchema = z.infer<typeof ExpenseInsertSchema>;
export type ExpenseSelectSchema = z.infer<typeof ExpenseSelectSchema>;

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categories: (typeof CATEGORIES)[ExpenseType];
};
