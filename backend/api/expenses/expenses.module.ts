import { Router } from "express";
import expensesController from "./expenses.controller";
import { ExpenseInsert } from "../../../lib/types";
import { bodyOfType } from "../../lib/middlewares";

const expensesRouter = Router();

expensesRouter
  .get("/", expensesController.handleGetAll)
  .post("/", bodyOfType(ExpenseInsert), expensesController.handleCreateOne)
  .get("/total", expensesController.handleGetTotalSpent);

export default expensesRouter;
