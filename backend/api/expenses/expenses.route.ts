import { Router } from "express";
import expensesController from "./expenses.controller";

const expensesRouter = Router();

expensesRouter.get("/", expensesController.handleGetOne);

export default expensesRouter;
