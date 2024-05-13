import { generateId } from "../../lib";
import { Expense, ExpenseInsertSchema } from "./expenses.type";

// Dummy data
const expenses: Expense[] = [
  {
    amount: 12,
    type: "bill",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 20,
    type: "spending",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 200,
    type: "bill",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
];

const service = {
  getOne: (id: string) => {
    return expenses.filter((expense) => expense.id === id);
  },
  getAll: (ownerId: string) => {
    return expenses.filter((expense) => expense.ownerId === ownerId);
  },

  createOne: (payload: ExpenseInsertSchema) => {
    const expense = {
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: generateId(),
    };

    expenses.push(expense);

    return expense;
  },
};

export default service;
