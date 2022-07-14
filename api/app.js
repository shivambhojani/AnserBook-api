import express from "express";
import { PORT } from "./constants/index.js";
import { homeRoute, postsRoute, authRoute } from "./routes/index.js";
import { mongoose } from "mongoose";

mongoose.connect(
  "mongodb+srv://group6:group6@prodcluster.3nmkwml.mongodb.net/test"
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/posts", postsRoute);
app.use("/auth", authRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log("⚡[server]: Server is running on port:", PORT);
});
