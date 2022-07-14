import Offer_appreciation from "../models/offer_appreciation.js";

// Service to save the post
const updateAppreciation = async (appreciation) => {
  const appreciationSet = await Offer_appreciation.updateOne(appreciation);
};

const getAppreciation = async () => {
  const score_offered = await Offer_appreciation.find();
  return score_offered[0];
};

export const offer_appreciationService = {
  updateAppreciation,
  getAppreciation,
};
