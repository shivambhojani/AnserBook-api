import bcrypt from "bcrypt";
import { AuthUser } from "../models/index.js";

import jwt from "jsonwebtoken";

const loginService = async ({ email, password }, res) => {
  console.log("email from client====" + email);
  console.log("password from client====" + password);

  try {
    const savedUser = await AuthUser.findOne({ email: email });
    console.log(savedUser);

    if (savedUser != null) {
      const isMatch = await bcrypt.compare(password, savedUser.password);
      console.log("here");

      const token = jwt.sign(email, "Kuldeep");

      if (isMatch) {
        console.log("success.");
        console.log(token);
        return { message: "ok", token }; // what to return if user is not register.
      } else {
        return { message: "Password doesn't match", token: "" }; // what to return if user is not register.
      }
    } else {
      return { message: "User doesn't exsist", token: "" }; // what to return if user is not register.
    }
  } catch (err) {
    console.log(err);
  }
};

const registerService = async (
  { firstname, lastname, email, password, confirmpassword },
  res
) => {
  const savedUser = await AuthUser.findOne({ email });
  if (savedUser) {
    res.status(422).json({
      message: "user already exist",
    });
    // how to return status 422 , if user exist
  } else {
    const hpassword = await bcrypt.hash(password, 12);
    console.log("hashed pass:", hpassword);
    const user = new AuthUser({
      firstname,
      lastname,
      email,
      password: hpassword,
      employeeId: "",
      addressline1: "",
      mobile: "",
      city: "",
      pinCode: "",
      profilePicture: "",
      isActive: true,
      subscribedTo: [],
      bookmarkLists: [],
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
  const savedUser = await AuthUser.findOne({ email: email });
  if (savedUser) {
    AuthUser.updateOne({ email: email }, { password: hp }, (err, data) => {
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
