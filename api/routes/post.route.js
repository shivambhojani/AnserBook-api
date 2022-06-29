import { Router } from "express";
import { postController } from "../controllers/index.js";

const postRoute = Router();

postRoute.get("/all", postController.postsGET);
postRoute.get("/:id", postController.postGET);

export default postRoute;
