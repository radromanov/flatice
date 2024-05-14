import z from "zod";
import { PREFIX, query } from ".";
import { ExpenseInsert, ExpenseSelect } from "./types";

// Define API endpoints
const { ALL_EXPENSES, TOTAL_EXPENSES } = {
  TOTAL_EXPENSES: `${PREFIX.core}${PREFIX.expenses}/total`,
  ALL_EXPENSES: `${PREFIX.core}${PREFIX.expenses}`,
} as const;

export const api = {
  categories: {
    get: () => {},
  },

  expenses: {
    getTotalSpent: async (ownerId: string, filter?: string | string[]) => {
      filter = filter?.toString();

      return await query<number>(
        `${TOTAL_EXPENSES}?owner=${ownerId}${filter ? `&filter=${filter}` : ""}`
      );
    },
    getAll: async (ownerId: string) =>
      await query(`${ALL_EXPENSES}?owner=${ownerId}`, {
        schema: z.array(ExpenseSelect),
      }),
    createOne: async (payload: ExpenseInsert) =>
      await query(`${ALL_EXPENSES}`, {
        method: "POST",
        body: JSON.stringify(payload),
        schema: ExpenseInsert,
      }),
  },
};

export type Api = typeof api;
