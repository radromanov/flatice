import { CATEGORIES } from "../../lib";

type Emergency = {
  id: string;
  category: typeof CATEGORY.EMERGENCY;
};

type Goals = {
  id: string;
  category: typeof CATEGORY.GOAL;
};

type Bills = {
  id: string;
  category: typeof CATEGORY.BILL;
};

type Spending = {
  id: string;
  category: typeof CATEGORY.SPENDING;
  // need: boolean;
  // love: boolean;
  // like: boolean;
  // want: boolean;
};

type ExpenseType = Spending | Bills | Goals | Emergency;

export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: ExpenseType;
  categories: (typeof CATEGORIES)[ExpenseType["category"]];
  amount: number;
  ownerId: string;
};
