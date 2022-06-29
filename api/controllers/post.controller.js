import { postService } from "../services/index.js";

// Get all posts
const postsGET = (req, res) => {
  const posts = postService.getAllPosts();

  res.status(200).json({
    message: "ok",
    posts,
  });
};

// Get a post based on the id
const postGET = (req, res) => {
  const { id } = req.params;

  const post = postService.getAPost(id);

  res.status(200).json({
    message: "ok",
    post,
  });
};

export const postController = {
  postsGET,
  postGET,
};
