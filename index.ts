import { config } from "dotenv";
config();
import express from "express";
import { registerRoutes } from "./controllers/controller.register";
export const app = express();

export const startServer = async () => {
  try {
    const { PORT } = process.env;
    registerRoutes(app);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.error("COULD NOT START SERVER");
    process.exit(1);
  }
};

startServer();