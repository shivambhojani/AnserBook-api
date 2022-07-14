import { postsService } from "../services/index.js";

// Get all feeds
const getFeeds = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();
    console.log(posts);

    res.status(200).json({
      message: "ok",
      posts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const feedsController = {
  getFeeds,
};
