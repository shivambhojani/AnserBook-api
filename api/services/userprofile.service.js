import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/auth.model.js";

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

const updatePassword = async (email, oldPassword, newPassword) => {
  console.log("update Password Service")
  const user = await getcurrentUser(email);
  try {
    const holdpassword = await bcrypt.hash(oldPassword, 12);
    const validOldPassword = await bcrypt.compare(oldPassword, user.password);
    console.log("validOldPassword", validOldPassword)
    if (validOldPassword) {
      console.log("Old Password is Valid")
      const hpassword = await bcrypt.hash(newPassword, 12);
      console.log('new hash', hpassword);
      const updatePassword = User.updateOne(
        { email: email },
        {
          $set:
          {
            password: hpassword
          }
        });
      return updatePassword;
    }
  } catch (err) {
    console.log(err)
    return err;
  }
};

const makeactive = async (email) => {
  const user = await getcurrentUser(email);
  console.log("User Email", email);
  if (user.isActive === false) {
    console.log("User Active", user.isActive);
    const makeuseractive = User.updateOne(
      { email: email },
      {
        $set:
        {
          isActive: true
        }
      });
    const user1 = await getcurrentUser(email);
    console.log("User Active", user1.isActive);
    return makeuseractive;
  }

}

const makeinactive = async (email) => {
  const user = await getcurrentUser(email);
  console.log("User Email", email);
  console.log("User Active", user.isActive);
  if (user.isActive === true) {
    console.log("User Active", user.isActive);
    const makeuseractive = User.updateOne(
      { email: email },
      {
        $set:
        {
          isActive: "false"
        }
      });
    const user1 = await getcurrentUser(email);
    console.log("User Active", user1.isActive);
    return makeuseractive;
  }

}

const updatecurrentUser = async (email, firstname, lastname, addressline1, city, mobile, pincode) => {

  const finduser = await User.findOne({ email: email });

  if (finduser) {
    let newfirstname = firstname;
    console.log('newfirstname', newfirstname)
    const updateuser = User.updateOne(
      { email: email },
      {
        $set:
        {
          firstname: firstname,
          lastname: lastname,
          addressline1: addressline1,
          city: city,
          mobile: mobile,
          pincode: pincode
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
  updatecurrentUser,
  updatePassword,
  makeactive,
  makeinactive
};