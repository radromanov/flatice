import { CATEGORIES } from "../../lib";
import { ExpenseType } from "../expenses/expenses.type";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categories: (typeof CATEGORIES)[ExpenseType];
};
