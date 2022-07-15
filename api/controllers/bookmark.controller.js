/**
 * Author: Saurabh Jayeshbhai Das <sr850847@dal.ca>
 * Feature: Bookmark Management
 */
import { bookmarkService } from "../services/index.js";

const getBookmarksOfUser = async (req, res) => {
  try {
    const resFromService = await bookmarkService.getBookmarksOfUser();
    res.status(200).json({
      message: "Getting all bookmarks for the user",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const addPostToBookmarkList = async (req, res) => {
  try {
    const resFromService = await bookmarkService.addPostToBookmarkList();
    res.status(200).json({
      message: "Adding post to the bookmark list",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const removePostFromBookmarkList = async (req, res) => {
  try {
    const resFromService = await bookmarkService.removePostFromBookmarkList();
    res.status(200).json({
      message: "Removing post from the bookmark list",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const bookmarkController = {
  getBookmarksOfUser,
  addPostToBookmarkList,
  removePostFromBookmarkList,
};
