import mongoose from "mongoose";

import User from "../models/userprofile.model.js";

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getcurrentUser = async (email) => {
  console.log('user service')
  var user;

  try {
    user = await User.findOne({ email: email });

    // user = user.filter((user) => user.email == email)

    return user;
  }
  catch (error) {
    user = await User.find();
  };
}

const updatecurrentUser = async (email, firstname) => {

  const finduser = await User.findOne({ email: email });

  if (finduser) {
    let newfirstname = firstname;
    console.log('newfirstname', newfirstname)
    const updateuser = User.updateOne(
      { email: email },
      {
        $set:
        {
          firstname: newfirstname
        }
      });
    // userafterupdate = await User.findOne({ email: email });
    return updateuser;
  }

}


const postUser = async () => {
  const newUser = await User.create(user);

  await newUser.save();

  console.log(newUser);
};

export const userprofileService = {
  getAllUsers,
  postUser,
  getcurrentUser,
  updatecurrentUser
};