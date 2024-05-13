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
