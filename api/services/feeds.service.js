import mongoose from "mongoose";
import Post from "../models/post.js";

// Service to get all posts
const getAllPosts = async () => {
  const posts = await Post.find();

  return posts;
};

// Service to get a post by id
const getAPost = async (id) => {
  console.log(id);

  const post = await Post.findOne({ userId: id });

  console.log(post);

  return post.filter((post) => post.userId == id);
};

// Service to save the post
const insertAPost = async (post) => {
  mongoose.connect(mongoURL);

  const newPost = await Post.create(post);

  await newPost.save();

  console.log(newPost);

  mongoose.connection.close();
};

export const postsService = {
  getAllPosts,
  getAPost,
  insertAPost,
};
