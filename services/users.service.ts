import usersSequelize from "../models/users.sequelize";

import { IUser } from "../interfaces/interface";

class ServiceUsers {
  constructor() { }

  async getUsers() {
    try {
        const data = await usersSequelize.getUsers(); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async getUser(id: string) {
    try {
      const data = await usersSequelize.getUser(id); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async createUser(params: IUser) {
    try {
      const data = await usersSequelize.createUser(params); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: string, params: IUser) {
    try {
      const data = await usersSequelize.updateUser(id, params); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id: string) {
    try {
      const data = await usersSequelize.deleteUser(id); // Sequelize
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceUsers();
