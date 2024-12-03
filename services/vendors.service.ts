import vendorsSequelize from "../models/vendors.sequelize";

import { IVendors } from "../interfaces/interface";

class ServiceVendors {
  constructor() { }

  async getVendors(params?: any) {
    try {
        const data = await vendorsSequelize.getVendors(params); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async getVendor(id: string) {
    try {
      const data = await vendorsSequelize.getVendor(id); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async createVendor(params: IVendors) {
    try {
      const data = await vendorsSequelize.createVendor(params); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async updateVendor(id: string, params: IVendors) {
    try {
      const data = await vendorsSequelize.updateVendor(id, params); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteVendor(id: string) {
    try {
      const data = await vendorsSequelize.deleteVendor(id); // Sequelize
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceVendors();
