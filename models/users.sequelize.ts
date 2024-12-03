import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize/sequelize";

class Users {
  private users;
  constructor() {
    this.users = sequelize.define(
      "Users",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        created_at: {
          type: DataTypes.DATE,
        },
        updated_at: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'Users', // Explicitly define the table name
        timestamps: false,
        underscored: true,
      }
    );
  }

  async getUsers() {
    try {
      const data = await this.users.findAll();
      return data;
    } catch (error) {
      return error;
    }
  }

  async getUser(id: string) {
    try {
      const data = await this.users.findByPk(id);
      return data;
    } catch (error) {
      return error;
    }
  }

  async createUser(data: any) {
    try {
      const result = await this.users.create(data);
      return {result, data};
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: string, data: any) {
    try {
      const result = await this.users.update(data, { where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id: string) {
    try {
      const result = await this.users.destroy({ where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Users();
