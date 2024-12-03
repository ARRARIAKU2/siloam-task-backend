import { Op, DataTypes } from "sequelize";
import sequelize from "../database/sequelize/sequelize";

class Vendors {
  private vendors;
  constructor() {
    this.vendors = sequelize.define(
      "Vendors",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        vendorName: {
          type: DataTypes.STRING,
          field: 'vendorName',  // Map to the actual column in the DB
        },
        address: {
          type: DataTypes.STRING,
        },
        created_at: {
          type: DataTypes.DATE,
          field: 'created_at',  // Map to the actual column in the DB
        },
        updated_at: {
          type: DataTypes.DATE,
          field: 'updated_at',  // Map to the actual column in the DB
        },
      },
      {
        tableName: 'Vendors', // Explicitly define the table name
        timestamps: false,
        underscored: true, // Ensure Sequelize uses snake_case for database columns
      }
    );
  }

  async getVendors(params?: any) {
    const size = params?.size ? Number(params?.size) : 10;
    const page = params?.page ? Number(params?.page) - 1 : 0;
    try {
      const data = await this.vendors.findAll({
        order: [["id", "asc"]],
        limit: size,
        offset: page * size,
      });

      if (params?.search) {
        const data = await this.vendors.findAll({
          where: {
            [Op.or]: [
              { title: { [Op.iLike]: `%${params?.search}%` } },
              { author: { [Op.iLike]: `%${params?.search}%` } }
            ],
          },
          order: [["id", "asc"]],
          limit: size,
          offset: page * size,
        });
      }
      return data;
    } catch (error) {
      return error;
    }
  }

  async getVendor(id: string) {
    try {
      const data = await this.vendors.findOne({ where: { id: id } });
      return data;
    } catch (error) {
      return error;
    }
  }

  async createVendor(data: any) {
    try {
      const result = await this.vendors.create(data);
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateVendor(id: string, data: any) {
    try {
      const result = await this.vendors.update(data, { where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteVendor(id: string) {
    try {
      const result = await this.vendors.destroy({ where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Vendors();
