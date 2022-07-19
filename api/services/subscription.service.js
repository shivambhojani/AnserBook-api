/*
 * @author: Shivangi Bhatt
 * @description: Subscription service
 */

import User from "../models/auth.model.js";

// Service to subscribe to a user
const subscribeUser = async (loggedInUserId, SubscribeToUserId) => {
  console.log("SubscribeToUserId", SubscribeToUserId);

  const user = await User.updateOne(
    { _id: loggedInUserId },
    {
      $push: {
        subscribedTo: SubscribeToUserId,
      },
    }
  );
  return user;
};

// Service to unsubscribe to a user

const unsubscribeUser = async (loggedInUserId, SubscribeToUserId) => {
  const user = await User.updateOne(
    { _id: loggedInUserId },
    {
      $pull: {
        subscribedTo: SubscribeToUserId,
      },
    }
  );
  return user;
};

export const subscriptionService = {
  subscribeUser,
  unsubscribeUser,
};
