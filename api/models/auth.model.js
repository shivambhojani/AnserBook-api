import mongoose from "mongoose";

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
    type: " string",
  },
  subscribeTo: [
    {
      userId: {
        type: "string",
      },
    },
  ],
});

const User = mongoose.model("user", UserSchema);
export default User;
