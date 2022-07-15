import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: "string",
  },
  lastname: {
    type: "string",
  },
  email: {
    type: "string",
  },
  password: {
    type: "string",
  },
  employeeId: {
    type: "string",
  },
  addressline1: {
    type: "string",
  },
  mobile: {
    type: "string",
  },
  city: {
    type: "string",
  },
  pinCode: {
    type: "string",
  },
  subscribeTo: [
    {
      type: ObjectId,
    },
  ],
});

const User = mongoose.model("user", UserSchema);
export default User;
