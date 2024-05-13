import { Router } from "express";
import expensesController from "./expenses.controller";
import { ExpenseInsertSchema } from "../../../lib/types";
import { bodyOfType } from "../../lib/middlewares";

const expensesRouter = Router();

expensesRouter
  .get("/", expensesController.handleGetAll)
  .post(
    "/",
    bodyOfType(ExpenseInsertSchema),
    expensesController.handleCreateOne
  );

export default expensesRouter;
