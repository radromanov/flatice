import { Router } from "express";
import expensesRouter from "./expenses/expenses.module";
import categoriesRouter from "./categories/categories.route";
import { PREFIX } from "../../lib";

const router = Router();

router.use(PREFIX.EXPENSES, expensesRouter);
router.use(PREFIX.CATEGORIES, categoriesRouter);

export default router;
