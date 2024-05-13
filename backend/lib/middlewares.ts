import { Request, Response, NextFunction } from "express";
import z from "zod";

export const bodyOfType =
  (schema: z.ZodSchema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const payload = schema.safeParse(req.body);

    if (!payload.success) {
      return next(new Error("Invalid payload in request body."));
    }

    next();
  };
