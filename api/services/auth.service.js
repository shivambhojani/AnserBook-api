import bcrypt from "bcrypt";
import { User } from "../models/index.js";

import jwt from "jsonwebtoken";

const loginService = async ({ email, password }) => {
  const savedUser = await User.findOne({ email: email });
  console.log(savedUser);

  if (savedUser) {
    const isMatch = await bcrypt.compare(password, savedUser.password);
    console.log("here");

    const token = jwt.sign(email, "Kuldeep");

    if (isMatch) {
      console.log("success.");
      console.log(token);
      return token;
    } else {
      res.status(500).json({
        message: "user login failed",
      });
      console.log("wrong credentials.");
    }
  } else {
    return; // what to return if user is not register.
  }
};

const registerService = async (
  { firstname, lastname, email, password, confirmpassword },
  res,
) => {
  const savedUser = await User.findOne({ email });
  if (savedUser) {
    res.status(422).json({
      message: "user already exist",
    });
    // how to return status 422 , if user exist
  } else {
    const hpassword = await bcrypt.hash(password, 12);
    console.log("hashed pass:", hpassword);
    const user = new User({
      firstname,
      lastname,
      password: hpassword,
      email,
      mobile: "",
      addressline1: "",
      employeeId: "",
      city: "",
      isActive: true,
      pinCode: "",
      subscribedTo: [],
      bookmarkLists: [],
      profilePicture: "",
    });
    user.save((err, data) => {
      if (err) {
        res.status(500).json({
          message: "user save failed",
        });
        console.log(err);
      } else {
        delete data["password"];
        res.status(200).json({
          message: "OK",
          data,
        });
        console.log(data);
      }
    });
  }
};

const fpService = async ({ email, password }) => {
  const hp = await bcrypt.hash(password, 12);
  const savedUser = await User.findOne({ email: email });
  if (savedUser) {
    User.updateOne({ email: email }, { password: hp }, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "user update failed",
        });
        console.log(err);
      } else {
        res.status(200).json({
          message: "OK",
          data,
        });
        console.log("updated.");
        console.log(data);
      }
    });
  }
};

export const authService = {
  loginService,
  registerService,
  fpService,
};
