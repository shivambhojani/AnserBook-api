/*
 * @author: Shivangi Bhatt
 * @description: Routes for feeds
 */

import { Router } from "express";
import { feedsController } from "../controllers/index.js";

const feedsRoute = Router();

feedsRoute.get("/all", feedsController.getFeeds);
feedsRoute.get("/getAllSocialPosts", feedsController.getAllSocialPosts);
feedsRoute.get("/getAllTechnicalPosts", feedsController.getAllTechnicalPosts);
feedsRoute.get("/getAllSubscribedPosts", feedsController.getAllSubscribedPosts);
feedsRoute.get("/getHotTopics", feedsController.getHotTopics);

export default feedsRoute;
