/*
 * @author: Shivangi Bhatt
 * @description: Subscription service
 */

import User from "../models/auth.model.js";

// Service to get all posts
const subscribeUser = async (loggedInUserId, SubscribeToUserId) => {
  const user = await User.updateOne(
    { _id: loggedInUserId },
    {
      $push: {
        subscribeTo: SubscribeToUserId,
      },
    }
  );
  return user;
};
const unsubscribeUser = async (loggedInUserId, SubscribeToUserId) => {
  const user = await User.updateOne(
    { _id: loggedInUserId },
    {
      $pull: {
        subscribeTo: SubscribeToUserId,
      },
    }
  );
  return user;
};

export const subscriptionService = {
  subscribeUser,
  unsubscribeUser,
};
