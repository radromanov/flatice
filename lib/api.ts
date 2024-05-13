import { PREFIX } from ".";
import { ExpenseInsertSchema, ExpenseSelectSchema } from "./types";

export const api = {
  categories: {
    get: () => {},
  },

  expenses: {
    getAll: async (ownerId: string) => {
      const response = await fetch(
        `${PREFIX.core}/${PREFIX.expenses}?owner=${ownerId}`
      );

      const data = await response.json();

      const parsedData = ExpenseSelectSchema.safeParse(data);
      if (!parsedData.success) {
        return [];
      }

      return parsedData.data;
    },
    createOne: async (payload: ExpenseInsertSchema) => {
      const response = await fetch(`${PREFIX.core}/${PREFIX.expenses}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const parsedResponse = ExpenseInsertSchema.safeParse(
        await response.json()
      );
      if (!parsedResponse.success) {
        return null;
      }

      return parsedResponse.data;
    },
  },
};

export type Api = typeof api;
