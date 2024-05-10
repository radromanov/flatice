import { Router } from "express";

const expenseRoutes = {
  init: () => {
    const prefix = "/expense";

    function routes() {
      const router = Router();

      router.get("/", (_req, res) =>
        res.json({ message: "hello from expense route" })
      );

      return { prefix, router };
    }

    function middlewares() {}

    middlewares();
    routes();

    return { routes };
  },
};

export default expenseRoutes;
