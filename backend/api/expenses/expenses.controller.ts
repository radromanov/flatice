import { Request, Response } from "express";
import expenseService from "./expenses.service";

const controller = {
  handleGetOne: (
    req: Request<any, any, any, { id: string }>,
    res: Response
  ) => {
    const { id } = req.query;

    const result = expenseService.getOne(id);

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
    const insertedExpense = expenseService.createOne(req.body);

    res.send({ expense: insertedExpense });
  },
};

export default controller;
