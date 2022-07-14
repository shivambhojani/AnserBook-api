import { postsService } from "../services/index.js";

// Get all posts
const postsGET = async (req, res) => {
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

// Get a post based on the id
const postsByIDGET = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const post = await postsService.getAPost(id);

    res.status(200).json({
      message: "ok",
      post,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Post a new post
const postsPOST = async (req, res) => {
  const post = req.body;

  console.log(post);

  try {
    const serviceResponse = await postsService.insertAPost(post);

    res.status(200).json({
      message: "ok",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const postsController = {
  postsGET,
  postsByIDGET,
  postsPOST,
};
