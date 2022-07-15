import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  employeeId: {
    type: String,
  },
  addressline1: {
    type: String,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  subscribeTo: [
    {
      type: ObjectId,
    },
  ],
});

export default mongoose.model("user", UserSchema);
