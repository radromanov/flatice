import { Router } from "express";
import expensesController from "./expenses.controller";

const expensesRouter = Router();

expensesRouter.get("/", expensesController.handleGetAll);

export default expensesRouter;
