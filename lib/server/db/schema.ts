import {
  index,
  numeric,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const ExpensesTable = pgTable(
  "flatice_expenses",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id").notNull(),
    amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
    type: varchar("type").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (expenses) => {
    return {
      uniqueIdx: index("unique_idx").on(expenses.userId),
    };
  }
);
