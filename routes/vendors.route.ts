import { Router } from "express";

import ControllerVendors from "../controllers/vendors.controller";


class ApiVendors {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/", ControllerVendors.getVendors);
    this.router.get("/:id", ControllerVendors.getVendor);
    this.router.post("/", ControllerVendors.createVendor);
    this.router.put("/:id", ControllerVendors.updateVendor);
    this.router.delete("/:id", ControllerVendors.deleteVendor);

    return this.router;
  }
}

export default new ApiVendors();
