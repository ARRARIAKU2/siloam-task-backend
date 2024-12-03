import { Router } from "express";

import ControllerAuth from "../controllers/auth.controller";
import ControllerUsers from "../controllers/users.controller";
import Auth from "../middlewares/Auth";

class ApiLogin {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.post("/login", ControllerAuth.getLogin);
    this.router.get("/user", Auth.Auth, ControllerUsers.getCurrentUser);

    return this.router;
  }
}

export default new ApiLogin();
