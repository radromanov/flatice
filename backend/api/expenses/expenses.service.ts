import { CATEGORIES, ID_CHARS, ID_LEN } from "../../lib";
import { Expense } from "./expenses.type";

function generateId(charSet: string = ID_CHARS, length: ID_LEN = ID_LEN) {
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

const expenses: Expense[] = [
  {
    amount: 12,
    type: {
      id: generateId(),
      category: "bill",
    },
    categories: CATEGORIES["bill"],
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 20,
    type: {
      id: generateId(),
      category: "spending",
    },
    categories: CATEGORIES["spending"],
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
  {
    amount: 200,
    type: {
      id: generateId(),
      category: "bill",
    },
    categories: CATEGORIES["bill"],
    createdAt: new Date(),
    updatedAt: new Date(),
    id: generateId(),
    ownerId: "admin",
  },
];

const service = {
  getOne: (payload: any) => {
    return payload;
  },
  getAll: (ownerId: string) => {
    return expenses.filter((expense) => expense.ownerId !== ownerId);
  },
};

export default service;
