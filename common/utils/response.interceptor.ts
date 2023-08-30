import { Request, Response, NextFunction } from "express";
import communicationService from "../../services/appService/communication.service";
import { IInterceptor } from "../types/interceptor.types";

export const responseInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sender = req.sender;

  res.jsonModified = (data: any) => {
    let modifiedResponse: IInterceptor = {};
    if (sender === "earth") {
      modifiedResponse["Response from Mars"] = data;
      modifiedResponse["Nokia Translation"] = communicationService.numericToEnglish(data);
    } else if (sender === "mars") {
      modifiedResponse["Response from Earth"] = data;
      modifiedResponse["Nokia Translation"] = communicationService.englishToNumeric(data);
    } else {
      modifiedResponse = data;
    }

    res.json(modifiedResponse);
  };

  next();
};
