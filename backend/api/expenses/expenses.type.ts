import { CATEGORIES } from "../../lib";

type Emergency = {
  id: string;
  category: "emergency";
};

type Goals = {
  id: string;
  category: "goal";
};

type Bills = {
  id: string;
  category: "bill";
};

type Spending = {
  id: string;
  category: "spending";
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
