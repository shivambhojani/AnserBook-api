import Post from "../models/post.js";

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
  ]);
  return posts;
};

export const feedService = {
  getAllPosts,
  getAllSocialPosts,
  getAllTechnicalPosts,
  getAllSubscribedPosts,
  getHotTopics,
};
