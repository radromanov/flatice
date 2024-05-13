import z from "zod";
import { ID_CHARS, ID_LEN, PREFIX } from ".";
import { ExpenseInsertSchema, ExpenseSelectSchema } from "./types";

export function generateId(
  charSet: string = ID_CHARS,
  length: ID_LEN = ID_LEN
) {
  function pickRandomChar() {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    const randomChar = ID_CHARS[randomIndex];

    return randomChar!;
  }

  let id = "";
  let lastChar = "";

  for (let i = 0; i < length; i++) {
    let randomChar = pickRandomChar();

    while (randomChar === lastChar) {
      randomChar = pickRandomChar();
    }

    lastChar = randomChar;
    id += randomChar;
  }

  return id;
}

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
