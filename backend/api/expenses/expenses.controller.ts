import { Request, Response } from "express";
import expenseService from "./expenses.service";

const controller = {
  handleGetOne: (req: Request, res: Response) => {
    const result = expenseService.getOne(req.originalUrl);

    res.send({ result });
  },
};

export default controller;
