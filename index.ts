import express, { Express } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

// import db from "./database/sequelize/sequelize";
import ApiVendors from "./routes/vendors.route";
import ApiUsers from "./routes/users.route";
import ApiAuth from "./routes/auth.route"

dotenv.config();

const PORT = process.env.PORT;

class Server {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use("/api/vendors", ApiVendors.routes());
    this.app.use("/api/users", ApiUsers.routes());
    this.app.use("/api", ApiAuth.routes());
  }

  run() {
    try {
      // db.authenticate()
      //   .then(() => {
      //     console.log(
      //       "Connection to Database has been established successfully."
      //     );
      //   })
      //   .catch((error) => {
      //     console.error("Unable to connect to the database: ", error);
      //   });

      this.app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Unable to connect to the Server:", error);
    }
  }
}

new Server().run();
