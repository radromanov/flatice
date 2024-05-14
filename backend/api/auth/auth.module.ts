import { Router } from "express";
import authController from "./auth.controller";

const authRouter = Router();

authRouter
  .get("/", authController.handleGetSession)
  .post("/login", authController.handleLogin)
  .post("/logout", authController.handleLogout)
  .post("/register", authController.handleRegister);

export default authRouter;
