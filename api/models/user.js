import mongoose from "mongoose";
const { Schema } = mongoose;
import { ObjectId } from "mongodb";

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
  subscribedTo: [
    {
      type: ObjectId,
    },
  ],
  bookmarkLists: [
    {
      bookmarkListName: String,
      postIds: [
        {
          type: String,
        },
      ],
    },
  ],
});

export default mongoose.model("user", UserSchema);
