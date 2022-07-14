import { feedService } from "../services/index.js";

// Get all feeds
const getFeeds = async (req, res) => {
  try {
    const { filter } = req.params;

    if (filter.toLowerCase() == "social") {
      const posts = await feedService.getAllSocialPosts();
      res.status(200).json({
        status: true,
        message: posts,
      });
    } else if (filter.toLowerCase() == "technical") {
      const posts = await feedService.getAllTechnicalPosts();

      res.status(200).json({
        status: true,
        message: posts,
      });
    } else if (filter.toLowerCase() == "subscribed") {
      const posts = await feedService.getAllSubscribedPosts();

      res.status(200).json({
        status: true,
        message: posts,
      });
    } else if (filter.toLowerCase() == "hottopics") {
      const posts = await feedService.getHotTopics();

      res.status(200).json({
        status: true,
        message: posts,
      });
    } else {
      const posts = await feedService.getAllPosts();
      console.log("posts", posts);

      res.status(200).json({
        status: true,
        message: posts,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

export const feedsController = {
  getFeeds,
};
