import { Request, Response } from "express";
import expenseService from "./expenses.service";
import { ExpenseInsertSchema } from "./expenses.type";

const controller = {
  handleGetOne: (req: Request, res: Response) => {
    const result = expenseService.getOne(req.originalUrl);

    res.send({ result });
  },

  handleGetAll: (
    req: Request<any, any, any, { owner: string }>,
    res: Response
  ) => {
    const { owner } = req.query;

    const expenses = expenseService.getAll(owner);

    res.send({ expenses });
  },

  handleCreateOne: (req: Request, res: Response) => {
    const ownerId = "admin"; // get from req.session eventually?

    const payload = ExpenseInsertSchema.safeParse(req.body);
    if (!payload.success) {
      throw new Error("Invalid expense payload.");
    }

    const expense = {
      ...payload.data,
      ownerId,
    };

    const insertedExpense = expenseService.createOne(expense);

    res.send({ expense: insertedExpense });
  },
};

export default controller;
