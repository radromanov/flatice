import { Request, Response, NextFunction } from "express";
import z from "zod";
import Exception from "./exception";

export const bodyOfType =
  (schema: z.ZodSchema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const payload = schema.safeParse(req.body);

    if (!payload.success) {
      return next(
        new Exception(
          "Invalid payload in request body.",
          "Unprocessable Entity"
        )
      );
    }

    next();
  };

export const notFound = (req: Request, _res: Response, next: NextFunction) => {
  next(new Exception(`Path ${req.originalUrl} not found.`, "Not Found"));
};

export const handleError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof Exception) {
    const { exception, message, path, status } = error.serialize();

    return res.status(status).send({ message, exception, status, path });
  }

  return res.status(500).send({
    message: "Unexpected error occurred. Please, try again.",
    exception: "Internal Server Error",
    status: 500,
    path: null,
  });
};
