import mongoose from "mongoose";
const { Schema } = mongoose;

const offer_appreciationSchema = new Schema({
  likesScore: Number,
  commentsScore: Number,
  bestAnswerScore: Number,
  postsScore: Number,
});

export default mongoose.model("offer_appreciations", offer_appreciationSchema);
