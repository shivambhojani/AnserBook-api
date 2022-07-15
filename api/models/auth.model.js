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
  profilePicture: {
    type: "string",
  },
  isActive: {
    type: "boolean",
    default: true,
  },
  subscribedTo: [
    {
      userId: {
        type: String,
      },
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
