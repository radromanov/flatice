import { generateId } from "../../../lib/helpers";
import { Expense, ExpenseInsert } from "../../../lib/types";

// Dummy data
const expenses: Expense[] = [
  {
    amount: 12,
    type: "bill",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 20,
    type: "spending",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 200,
    type: "bill",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    id: generateId(),
    ownerId: "admin",
  },
];

const expenseService = {
  getTotalSpent: async (ownerId: string, filter?: string | string[]) => {
    let total = 0;
    const expenses = (await expenseService.getAll(ownerId)).forEach(
      (expense) => (total += expense.amount)
    );

    return total;
  },
  getOne: async (id: string) => {
    return expenses.filter((expense) => expense.id === id)[0] ?? null;
  },
  getAll: async (ownerId: string) => {
    return expenses.filter((expense) => expense.ownerId === ownerId);
  },

  createOne: async (payload: ExpenseInsert) => {
    const expense = {
      ...payload,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      id: generateId(),
    };

    expenses.push(expense);

    return expense;
  },
};

export type ExpenseService = typeof expenseService;
export default expenseService;
