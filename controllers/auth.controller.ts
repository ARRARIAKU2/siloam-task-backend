import { Request, Response } from "express";

import ServiceAuth from "../services/auth.service";
import { Login, IUser } from "../interfaces/interface";

class ControllerAuth {
  constructor() { }

  async getLogin(req: Request, res: Response) {
    const params: Login = {
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const response = (await ServiceAuth.getLogin(params)) as any;

      if (!response.success) {
        return res.status(400).json({
          success: response.success,
        });
      }

      const user: IUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      };

      const token = ServiceAuth.generateToken(user);

      res.status(200).json({
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }
}

export default new ControllerAuth();
