import mongoose from "mongoose";
const mongoURL = "mongodb+srv://group6:group6@prodcluster.3nmkwml.mongodb.net/answer-book";
import Post from "../models/post.js";

// Service to get all posts
const getAllPosts = async () => {

  mongoose.connect(mongoURL)
  
  const posts = await Post.find();

  mongoose.connection.close()

  return posts;
};

// Service to get a post by id
const getAPost = async (id) => {
  
  mongoose.connect(mongoURL);

  console.log(id);
  
  const post = await Post.findOne({userId: id})

  console.log(post);

  mongoose.connection.close();

  return post.filter(post => post.userId == id);
};

// Service to save the post
const insertAPost = async (post) => {
  
  mongoose.connect(mongoURL);

  const newPost = await Post.create(post);

  await newPost.save();

  console.log(newPost);

  mongoose.connection.close()
};


export const postsService = {
  getAllPosts,
  getAPost,
  insertAPost
};
