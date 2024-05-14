import { Request, Response } from "express";
import expenseService from "./expenses.service";

const controller = {
  handleGetTotalSpent: (
    req: Request<any, any, any, { owner: string; filter?: string }>,
    res: Response
  ) => {
    const { owner } = req.query;

    const totalSpent = expenseService.getTotalSpent(owner);

    res.send(totalSpent.toString());
  },
  handleGetOne: (
    req: Request<{ id: string }, any, any, any>,
    res: Response
  ) => {
    const { id } = req.params;

    const expense = expenseService.getOne(id);

    res.send(expense);
  },

  handleGetAll: (
    req: Request<any, any, any, { owner: string }>,
    res: Response
  ) => {
    const { owner } = req.query;

    const expenses = expenseService.getAll(owner);

    res.send(expenses);
  },

  handleCreateOne: (req: Request, res: Response) => {
    const expense = expenseService.createOne(req.body);

    res.send(expense);
  },
};

export default controller;
