import { Request, Response } from "express";
import authService from "./auth.service";

const authController = {
  handleGetSession: (_req: Request, _res: Response) => authService.getSession,
  handleLogin: (_req: Request, _res: Response) => authService.login,
  handleLogout: (_req: Request, _res: Response) => authService.logout,
  handleRegister: (_req: Request, _res: Response) => authService.register,
};

export default authController;
