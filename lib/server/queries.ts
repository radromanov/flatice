import "server-only";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { ExpensesTable } from "./db/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

/**
 *
 * Data-access layer
 *
 */

export async function getMyExpenses() {
  const user = await getKindeServerSession().getUser();

  if (!user) return null;

  const expenses = await db
    .select({
      id: ExpensesTable.id,
      type: ExpensesTable.type,
      amount: ExpensesTable.amount,
      createdAt: ExpensesTable.createdAt,
    })
    .from(ExpensesTable)
    .where(eq(ExpensesTable.userId, user.id));

  return expenses;
}
