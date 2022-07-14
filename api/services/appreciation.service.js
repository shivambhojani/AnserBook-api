import Appreciation from "../models/appreciation.js";

// Service to save the post
const updateAppreciation = async (appreciation) => {
  const appreciationSet = await Appreciation.create(appreciation);
  await appreciationSet.save();
};

export const appreciationService = {
  updateAppreciation,
};
