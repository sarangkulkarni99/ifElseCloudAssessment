import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      sender?: string | string[];
      receiver?: string | string[];
    }
    interface Response {
      jsonModified?: any
    }
  }
}

export const setHeaderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { "x-sender": sender, "x-receiver": receiver } = req.headers;
    req.sender = sender;
    req.receiver = receiver;
    const startTime = new Date();
    console.log(`Sender: ${sender}, Receiver: ${receiver}`);
    next();
    const endTime = new Date();
    const processingTime = endTime.getTime() - startTime.getTime();
    console.log(`Request processing time: ${processingTime}ms`);
  } catch (error) {
    next(error);
  }
};
