/**
 * Author: Saurabh Jayeshbhai Das <sr850847@dal.ca>
 * Feature: Bookmark Management
 */
import { Router } from "express";
import { bookmarkController } from "../controllers/index.js";

const bookmarkRoute = Router();

// get all bookmark lists for a user
bookmarkRoute.get("/getAll/:userID", bookmarkController.getBookmarksOfUser);
// adding a post to an existing bookmark list or new one
bookmarkRoute.post("/add/:userID", bookmarkController.addPostToBookmarkList);
// remove a post to from a bookmark list
bookmarkRoute.delete(
  "/remove/:userID",
  bookmarkController.removePostFromBookmarkList,
);

export default bookmarkRoute;
