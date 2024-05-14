import { Router } from "express";
import { PREFIX } from "../../lib";
import expensesRouter from "./expenses/expenses.module";
import categoriesRouter from "./categories/categories.route";
import authRouter from "./auth/auth.module";

const router = Router();

router.use(PREFIX.expenses, expensesRouter);
router.use(PREFIX.categories, categoriesRouter);
router.use(PREFIX.auth, authRouter);

export default router;
