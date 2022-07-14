import Appreciation from "../models/appreciation.js";

// Service to save the post
const updateAppreciation = async (appreciation) => {
  const appreciationSet = await Appreciation.create(appreciation);
  await appreciationSet.save();
};

const getAppreciation = async (userid) => {
  const appreciation = await Appreciation.findOne({ userId: userid });
  console.log(appreciation.likesScore);
  return appreciation;
};

export const appreciationService = {
  updateAppreciation,
  getAppreciation,
};
