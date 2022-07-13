import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  userId: Number,
  topic: String,
  body: String,
  tags: [{type: String}],
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
  type: String
})

export default mongoose.model("post", postSchema);