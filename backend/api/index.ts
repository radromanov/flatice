import { Router } from "express";
import { PREFIX } from "../lib/constants";
import expensesRouter from "./expenses/expenses.route";
import categoriesRouter from "./categories/categories.route";

const router = Router();

router.use(PREFIX.EXPENSES, expensesRouter);
router.use(PREFIX.CATEGORIES, categoriesRouter);

export default router;
