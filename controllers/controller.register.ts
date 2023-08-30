import cors from "cors";
import { Application, NextFunction, Request, Response, json } from "express";
import helmet from "helmet";
import { ResponseHandler } from "../common/utils/responseHandler";
import { setHeaderMiddleware } from "../middlewares/communication.middleware";
import { routes } from "./controller.data";

export const registerRoutes = (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(json());
  app.use(setHeaderMiddleware);

  routes.length &&
    routes.map((route) => {
      app.use(route.path, route.router);
    });
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
  });
};
