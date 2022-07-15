import mongoose from "mongoose";
const { Schema } = mongoose;

const appreciationSchema = new Schema({
  userId: Schema.Types.ObjectId,
  likesScore: Number,
  commentsScore: Number,
  bestAnswerScore: Number,
  postsScore: Number,
});

export default mongoose.model("appreciation", appreciationSchema);
