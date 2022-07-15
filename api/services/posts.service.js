import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
import { appreciationService } from "../services/index.js";

import { Post } from "../models/index.js";

// Service to get all posts
const getAllPosts = async (id) => {
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
    { $match: { userId: ObjectId(id) } },
  ]);

  return posts;
};

// Service to save the post
const insertAPost = async (post) => {
  const newPost = await Post.create(post);

  await newPost.save();
  appreciationService.incrementPostsScore({ post });
};

// Service to delete a post by id
const deleteAPost = async (id) => {
  const post = await Post.deleteOne({ _id: id });

  console.log(post);

  return post;
};

// Service to update a post by id
const updateAPost = async (id, reqBody) => {
  console.log(id);
  console.log(reqBody);

  const post = await Post.updateOne(
    { _id: id },
    { body: reqBody.body, tags: reqBody.tags, type: reqBody.type }
  );

  return post;
};

export const postsService = {
  getAllPosts,
  insertAPost,
  deleteAPost,
  updateAPost,
};
