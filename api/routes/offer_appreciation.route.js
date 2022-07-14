import { Router } from "express";
import { offer_appreciationController } from "../controllers/index.js";

const offer_appreciationRoute = Router();

offer_appreciationRoute.put(
  "/",
  offer_appreciationController.updateAppreciation
);
offer_appreciationRoute.get("/", offer_appreciationController.getAppreciation);

export default offer_appreciationRoute;
