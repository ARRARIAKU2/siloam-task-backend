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
        tableName: "Users",
        timestamps: false,
        underscored: true,
      }
    );
  }

  async getLogin(params: any) {
    try {
      const data = await this.users.findOne({ where: { email: params.email } });
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new Users();
