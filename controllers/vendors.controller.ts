import { Request, Response } from "express";

import ServiceVendors from "../services/vendors.service";

import { IVendors, VendorController } from "../interfaces/interface";

interface AuthenticatedRequest extends Request {
  user?: any; // Adjust the type according to your decoded user type
}

class ControllerVendors implements VendorController {
  constructor() { }

  async getVendors(req: Request, res: Response) {
    try {
      const query = req.query as any;
      const vendors = (await ServiceVendors.getVendors(query)) as any;
      const totalPages = Math.floor(vendors.total / Number(query?.size ?? 10)) + 1;

      if (vendors.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: vendors,
          meta: {
            page: query?.page ? Number(query?.page) : 1,
            size: query?.size ? Number(query?.size) : 10,
            totalData: vendors.total,
            totalPages,
          },
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async getVendor(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const vendor = (await ServiceVendors.getVendor(id)) as IVendors[];

      if (vendor.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: vendor,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async createVendor(req: Request, res: Response) {
    try {
      const params: IVendors = {
        vendorName: req.body.vendorName,
        address: req.body.address,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const vendor = (await ServiceVendors.createVendor(params)) as IVendors;

      res.status(200).json({
        message: "Success Create Data!",
        data: vendor,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async updateVendor(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const params: IVendors = {
        vendorName: req.body.vendorName,
        address: req.body.address,
        updated_at: new Date().toISOString(),
      };

      const vendor = (await ServiceVendors.updateVendor(id, params)) as IVendors;

      res.status(200).json({
        message: "Success Update Data!",
        data: vendor,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async deleteVendor(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const vendor = (await ServiceVendors.deleteVendor(id).then((data) => {
        if (data) {
          res.status(200).json({
            message: "Success Delete Data!",
            data: data,
          });
        } else {
          res.status(404).json({
            message: "Data Not Found!",
          });
        }
      })) as IVendors;
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }
}

export default new ControllerVendors();
