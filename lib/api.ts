import z from "zod";
import { PREFIX } from ".";
import { ExpenseInsert, ExpenseSelect } from "./types";

export const api = {
  categories: {
    get: () => {},
  },

  expenses: {
    getTotalSpent: async (ownerId: string, filter?: string | string[]) => {
      filter = filter?.toString();

      const response = await fetch(
        `${PREFIX.core}/${PREFIX.expenses}/total?owner=${ownerId}${
          filter ? `&filter=${filter}` : ""
        }`
      );

      const data = await response.json();

      return data;
    },
    getAll: async (ownerId: string) => {
      const response = await fetch(
        `${PREFIX.core}/${PREFIX.expenses}?owner=${ownerId}`
      );

      const data = await response.json();

      const parsedData = z.array(ExpenseSelect).safeParse(data);
      if (!parsedData.success) {
        console.log(parsedData.error);
        return [];
      }

      return parsedData.data;
    },
    createOne: async (payload: ExpenseInsert) => {
      const response = await fetch(`${PREFIX.core}/${PREFIX.expenses}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const parsedResponse = ExpenseInsert.safeParse(await response.json());
      if (!parsedResponse.success) {
        return null;
      }

      return parsedResponse.data;
    },
  },
};

export type Api = typeof api;
