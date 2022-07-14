import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
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
      userId: {
        type: "string",
      },
    },
  ],
});

export default mongoose.model("user", UserSchema);
