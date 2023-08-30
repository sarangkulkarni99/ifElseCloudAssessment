import { Route, Routes } from "../common/types/controller.types";
import { communicationRouter } from "./communication.controller";

export const routes: Routes = [
  new Route("/api", communicationRouter),
];
