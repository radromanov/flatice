import { Router } from "express";
import expensesController from "./expenses.controller";
import { ExpenseInsert } from "../../../lib/types";
import { bodyOfType } from "../../lib/middlewares";

const expensesRouter = Router();

expensesRouter
  .get("/", expensesController.handleGetAll)
  .get("/:id", expensesController.handleGetOne)
  .get("/total", expensesController.handleGetTotalSpent)
  .post("/", bodyOfType(ExpenseInsert), expensesController.handleCreateOne);

export default expensesRouter;
