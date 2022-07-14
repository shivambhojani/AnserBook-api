import { feedService } from "../services/index.js";

// Get all feeds
const getFeeds = async (req, res) => {
  try {
    const posts = await feedService.getAllPosts();
    console.log("posts", posts);

    res.status(200).json({
      status: true,
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
const getAllSocialPosts = async (req, res) => {
  try {
    const posts = await feedService.getAllSocialPosts();
    console.log(posts);

    res.status(200).json({
      status: true,
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
const getAllTechnicalPosts = async (req, res) => {
  try {
    const posts = await feedService.getAllTechnicalPosts();
    console.log(posts);

    res.status(200).json({
      status: true,
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
const getAllSubscribedPosts = async (req, res) => {
  try {
    const posts = await feedService.getAllSubscribedPosts();
    console.log(posts);

    res.status(200).json({
      status: true,
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
const getHotTopics = async (req, res) => {
  try {
    const posts = await feedService.getHotTopics();
    console.log(posts);

    res.status(200).json({
      status: true,
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

export const feedsController = {
  getFeeds,
  getAllSocialPosts,
  getAllTechnicalPosts,
  getAllSubscribedPosts,
  getHotTopics,
};
