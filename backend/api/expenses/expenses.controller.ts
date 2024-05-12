import { Request, Response } from "express";
import expenseService from "./expenses.service";

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
};

export default controller;
