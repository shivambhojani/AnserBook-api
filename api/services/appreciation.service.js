import Appreciation from "../models/appreciation.js";
import Offer_appreciation from "../models/offer_appreciation.js";

// Service to save the post
const updateAppreciation = async (appreciation) => {
  const appreciationSet = await Appreciation.updateOne(appreciation);
};

const createAppreciation = async (appreciation) => {
  const appreciationSet = await Appreciation.create(appreciation);
  await appreciationSet.save();
};

const getAppreciation = async (userid) => {
  const appreciation = await Appreciation.findOne({ userId: userid });
  return appreciation;
};

const incrementLikesScore = async (user) => {
  const userid = user.userId;
  const appreciation = await Appreciation.findOne({
    userId: userid,
  });

  const scores_offered = await Offer_appreciation.find();
  const score_offered = scores_offered[0];
  appreciation.likesScore = appreciation.likesScore + score_offered.likesScore;
  await Appreciation.updateOne({ userId: appreciation.userId }, appreciation);
};

const incrementCommentsScore = async (user) => {
  const userid = user.userId;
  const appreciation = await Appreciation.findOne({
    userId: userid,
  });

  const scores_offered = await Offer_appreciation.find();
  const score_offered = scores_offered[0];
  appreciation.commentsScore =
    appreciation.commentsScore + score_offered.commentsScore;
  await Appreciation.updateOne({ userId: appreciation.userId }, appreciation);
};

const incrementBestAnswerScore = async (user) => {
  const userid = user.userId;
  const appreciation = await Appreciation.findOne({
    userId: userid,
  });

  const scores_offered = await Offer_appreciation.find();
  const score_offered = scores_offered[0];
  appreciation.bestAnswerScore =
    appreciation.bestAnswerScore + score_offered.bestAnswerScore;
  await Appreciation.updateOne({ userId: appreciation.userId }, appreciation);
};

const incrementPostsScore = async (user) => {
  const userid = user.userId;
  const appreciation = await Appreciation.findOne({
    userId: userid,
  });

  const scores_offered = await Offer_appreciation.find();
  const score_offered = scores_offered[0];
  appreciation.postsScore = appreciation.postsScore + score_offered.postsScore;
  await Appreciation.updateOne({ userId: appreciation.userId }, appreciation);
};

export const appreciationService = {
  updateAppreciation,
  getAppreciation,
  incrementLikesScore,
  createAppreciation,
  incrementCommentsScore,
  incrementBestAnswerScore,
  incrementPostsScore,
};
