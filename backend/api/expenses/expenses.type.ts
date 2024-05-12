export type ExpenseType = "spending" | "bill" | "goal" | "emergency";

export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: ExpenseType;
  amount: number;
  ownerId: string;
};
