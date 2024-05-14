export const PREFIX = {
  expenses: "/expenses",
  categories: "/categories",
  auth: "/auth",
} as const;

export type ID_LEN = 12 | 14 | 16;
export const ID_LEN: ID_LEN = 16 as const;
export const ID_CHARS =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~-_" as const;

// You save for... until you can spend for...
const GOAL_CATEGORY = [
  "Education",
  "Business",
  "Holiday",
  "Home",
  "Car",
  "Wedding",
  "Other",
] as const;

const BILL_CATEGORY = [
  "Utilities",
  "Rent",
  "Internet",
  "Mobile",
  "Other",
] as const;

const SPENDING_CATEGORY = [
  "Food",
  "Cosmetics",
  "Clothing",
  "Pets",
  "Home Supplies",
  "Kids",
  "Holiday",
  "Commute",
  "Entertainment",
  "Health",
  "Electronics",
  "Other",
] as const;

const EMERGENCY_CATEGORY = ["Emergency"] as const;

export const CATEGORY = {
  EMERGENCY: "emergency",
  GOAL: "goal",
  BILL: "bill",
  SPENDING: "spending",
} as const;

export const CATEGORIES: {
  [K in (typeof CATEGORY)[keyof typeof CATEGORY]]:
    | typeof EMERGENCY_CATEGORY
    | typeof GOAL_CATEGORY
    | typeof BILL_CATEGORY
    | typeof SPENDING_CATEGORY;
} = {
  emergency: EMERGENCY_CATEGORY,
  goal: GOAL_CATEGORY,
  bill: BILL_CATEGORY,
  spending: SPENDING_CATEGORY,
} as const;
