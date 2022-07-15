/*
 * @author: Shivangi Bhatt
 * @description: Feeds services
 */
import Post from "../models/post.js";
import Appreciation from "../models/appreciation.js";

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
    {
      $project: {
        _id: 1,
        userId: 1,
        topic: 1,
        body: 1,
        tags: 1,
        type: 1,
        createdOn: 1,
        updatedOn: 1,
        reactions: 1,
        user: 1,
        reactionCount: { $size: "$reactions" },
      },
    },
    { $sort: { reactionCount: -1 } },
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
    }
  );
  return posts;
};

const getStarEmployees = async () => {
  const starEmployees = await Appreciation.aggregate([
    {
      $project: {
        userId: 1,
        badge: 1,
        totalScore: {
          $sum: [
            "$likesScore",
            "$commentsScore",
            "$bestAnswerScore",
            "$postsScore",
          ],
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $sort: { totalScore: -1 } },
    { $limit: 5 },
  ]);
  return starEmployees;
};

export const feedService = {
  getAllPosts,
  getAllSocialPosts,
  getAllTechnicalPosts,
  getAllSubscribedPosts,
  getHotTopics,
  addReactions,
  getStarEmployees,
};
