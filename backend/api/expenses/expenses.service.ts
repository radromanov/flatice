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

const service = {
  getTotalSpent: (ownerId: string) => {
    let total = 0;
    const expenses = service
      .getAll(ownerId)
      .forEach((expense) => (total += expense.amount));

    return total;
  },
  getOne: (id: string) => {
    return expenses.filter((expense) => expense.id === id);
  },
  getAll: (ownerId: string) => {
    return expenses.filter((expense) => expense.ownerId === ownerId);
  },

  createOne: (payload: ExpenseInsert) => {
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

export default service;
