import { PREFIX, query } from ".";
import { Api, ExpenseInsert } from "./types";
import { AuthService } from "../backend/api/auth/auth.service";
import { ExpenseService } from "../backend/api/expenses/expenses.service";

// Define API endpoints
const { ALL_EXPENSES, TOTAL_EXPENSES } = {
  TOTAL_EXPENSES: `/api/v1${PREFIX.expenses}/total`,
  ALL_EXPENSES: `/api/v1${PREFIX.expenses}`,
} as const;

export const api: {
  auth: Api<AuthService>;
  expenses: Api<ExpenseService>;
} = {
  auth: {
    getSession: async () => {},
    login: async () => {},
    logout: async () => {},
    register: async () => {},
  },
  expenses: {
    getOne: async (id: string) => await query(`${ALL_EXPENSES}/${id}`),
    getTotalSpent: async (ownerId: string, filter?: string | string[]) => {
      filter = filter?.toString();

      return await query<number>(
        `${TOTAL_EXPENSES}?owner=${ownerId}${filter ? `&filter=${filter}` : ""}`
      );
    },
    getAll: async (ownerId) => await query(`${ALL_EXPENSES}?owner=${ownerId}`),
    createOne: async (expense: ExpenseInsert) =>
      await query(`${ALL_EXPENSES}`, {
        method: "POST",
        body: expense,
      }),
  },
};
