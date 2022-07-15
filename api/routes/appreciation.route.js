import { Router } from "express";
import { appreciationController } from "../controllers/index.js";

const appreciationRoute = Router();

appreciationRoute.put("/", appreciationController.updateAppreciation);
appreciationRoute.get("/:userid", appreciationController.getAppreciation);
appreciationRoute.put("/likes", appreciationController.incrementLikesScore);
appreciationRoute.post("/", appreciationController.createAppreciation);
appreciationRoute.put(
  "/comments",
  appreciationController.incrementCommentsScore
);
appreciationRoute.put(
  "/bestanswer",
  appreciationController.incrementBestAnswerScore
);
appreciationRoute.put("/posts", appreciationController.incrementPostsScore);

export default appreciationRoute;
