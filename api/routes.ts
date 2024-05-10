import { Router } from "express";
import expenseRoutes from "./expenses/expense.route";

const router = Router();

const expensesApi = expenseRoutes.init().routes();

router.use(expensesApi.prefix, expensesApi.router);

export default router;
