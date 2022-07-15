import { Post } from "../models/index.js";

// Service to get all posts
const getAllPosts = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $sort: { createdOn: -1 } },
  ]);
  return posts;
};
const getAllSocialPosts = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $match: { type: { $regex: new RegExp("Social", "i") } } },
    { $sort: { createdOn: -1 } },
  ]);

  return posts;
};
const getAllTechnicalPosts = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $match: { type: { $regex: new RegExp("Technical", "i") } } },
    { $sort: { createdOn: -1 } },
  ]);

  return posts;
};
const getAllSubscribedPosts = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $sort: { createdOn: -1 } },
  ]);
  return posts;
};
const getHotTopics = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $sort: { createdOn: -1 } },
  ]);
  return posts;
};

const addReactions = async (id, reaction, userId, userName) => {
  console.log("userId", userId);
  const posts = await Post.updateOne(
    { _id: id },
    {
      $push: {
        reactions: {
          emoji: reaction, // String name of reaction
          by: userName, // String of persons name
          id: userId,
        },
      },
    },
  );
  return posts;
};

export const feedService = {
  getAllPosts,
  getAllSocialPosts,
  getAllTechnicalPosts,
  getAllSubscribedPosts,
  getHotTopics,
  addReactions,
};
