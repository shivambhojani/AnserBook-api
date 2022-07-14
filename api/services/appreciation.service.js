import Appreciation from "../models/appreciation.js";

// Service to save the post
const updateAppreciation = async (appreciation) => {
  const appreciationSet = await Appreciation.updateOne(appreciation);
};

const getAppreciation = async (userid) => {
  const appreciation = await Appreciation.findOne({ userId: userid });
  return appreciation;
};

export const appreciationService = {
  updateAppreciation,
  getAppreciation,
};
