import { appreciationService } from "../services/index.js";

const updateAppreciation = async (req, res) => {
  const post = req.body;
  try {
    const serviceResponse = await appreciationService.updateAppreciation(post);

    res.status(200).json({
      message: "ok",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get a post based on the id
const getAppreciation = async (req, res) => {
  const { userid } = req.params;
  try {
    const appreciation = await appreciationService.getAppreciation(userid);

    res.status(200).json({
      message: "ok",
      appreciation,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const appreciationController = {
  updateAppreciation,
  getAppreciation,
};
