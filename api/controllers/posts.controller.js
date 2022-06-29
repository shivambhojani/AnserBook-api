import { postsService } from "../services/index.js";

// Get all posts
const postsGET = (req, res) => {
  const posts = postsService.getAllPosts();

  res.status(200).json({
    message: "ok",
    posts,
  });
};

// Get a post based on the id
const postsByIDGET = (req, res) => {
  const { id } = req.params;

  const post = postsService.getAPost(id);

  res.status(200).json({
    message: "ok",
    post,
  });
};

export const postsController = {
  postsGET,
  postsByIDGET,
};
