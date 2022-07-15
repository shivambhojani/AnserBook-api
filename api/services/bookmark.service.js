/**
 * Author: Saurabh Jayeshbhai Das <sr850847@dal.ca>
 * Feature: Bookmark Management
 */
import { User } from "../models/index.js";

const getBookmarkListOfUser = async userId => {
  try {
    const user = await User.findById(userId);

    return user.bookmarkLists;
  } catch (error) {
    return error;
  }
};

const addPostToBookmarkList = async (userId, postId, addToBookmarkListName) => {
  try {
    const user = await User.findById(userId);
    let postAdded = false;

    for (bmList of user.bookmarkLists) {
      console.log("got list:", bmList.bookmarkListName);
      if (bmList.bookmarkListName === addToBookmarkListName) {
        console.log("Gt so editing!!");
        bmList.postIds.push(postId);
        postAdded = true;
        break;
      }
    }

    if (!postAdded) {
      console.log("Not got so creating new!!");
      user.bookmarkLists.push({
        bookmarkListName: addToBookmarkListName,
        postIds: [postId],
      });
    }

    const res = await User.findByIdAndUpdate(userId, user);
    return res;
  } catch (error) {
    return error;
  }
};

const removePostFromBookmarkList = async (userId, postId, bookmarkListName) => {
  const user = await User.findById(userId);

  user.bookmarkLists = user.bookmarkLists.push(postId);

  const res = await User.findByIdAndUpdate(userId, user);
  return res;
};

export const bookmarkService = {
  getBookmarkListOfUser,
  addPostToBookmarkList,
  removePostFromBookmarkList,
};
