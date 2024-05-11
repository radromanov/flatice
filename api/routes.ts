import { Router } from "express";
import expensesRoutes from "./expenses/expenses.route";
import { PREFIX } from "../constants";

const router = Router();

router.use(PREFIX.EXPENSE, expensesRoutes);

export default router;
