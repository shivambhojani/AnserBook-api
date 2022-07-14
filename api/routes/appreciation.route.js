import { Router } from "express";
import { appreciationController } from "../controllers/index.js";

const appreciationRoute = Router();

appreciationRoute.put("/", appreciationController.updateAppreciation);
appreciationRoute.get("/:userid", appreciationController.getAppreciation);

export default appreciationRoute;
