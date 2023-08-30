import { Router } from "express";
import { responseInterceptor } from "../common/utils/response.interceptor";

export const communicationRouter = Router();


// Send and Receive interplanetary messages
communicationRouter.post(
  "/earth-mars-comm/message",
  responseInterceptor,
  (req, res, next) => {
    try {
      const { sender, receiver } = req;
      const { message } = req.body;
      switch (`${sender}-${receiver}`) {
        case "earth-mars":
          res.jsonModified(message);
          break;
        case "mars-earth":
          res.jsonModified(message);
          break;
        default:
          res.jsonModified("Unknown sender and receiver combination");
      }
    } catch (error) {
      next(error);
    }
  }
);
