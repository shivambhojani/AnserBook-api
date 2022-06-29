import { Router } from "express";
import { postsController } from "../controllers/index.js";

const postsRoute = Router();

postsRoute.get("/", postsController.postsGET);
postsRoute.get("/:id", postsController.postsByIDGET);

export default postsRoute;
