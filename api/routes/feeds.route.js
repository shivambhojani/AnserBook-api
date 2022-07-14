/*
 * @author: Shivangi Bhatt
 * @description: Routes for feeds
 */

import { Router } from "express";
import { feedsController } from "../controllers/index.js";

const feedsRoute = Router();

feedsRoute.get("/", feedsController.getFeeds);

export default feedsRoute;
