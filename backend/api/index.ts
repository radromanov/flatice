import { Router } from "express";
import expensesRoutes from "./expenses/expenses.route";
import { PREFIX } from "../lib/constants";

const router = Router();

router.use(PREFIX.EXPENSES, expensesRoutes);

export default router;
