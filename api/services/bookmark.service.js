/**
 * Author: Saurabh Jayeshbhai Das <sr850847@dal.ca>
 * Feature: Bookmark Management
 */

const getBookmarksOfUser = async userId => {
  return userId;
};

const addPostToBookmarkList = async (userId, postId, bookmarkListName) => {
  return { bookmarkLIst: "added bm" };
};

const removePostFromBookmarkList = async (userId, postId, bookmarkListName) => {
  return { bookmarkLIst: "removed bm" };
};

export const bookmarkService = {
  getBookmarksOfUser,
  addPostToBookmarkList,
  removePostFromBookmarkList,
};
