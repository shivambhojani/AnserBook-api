import express from "express";
import mongoose from "mongoose";
import { PORT, CONNECTION_URL } from "./constants/index.js";
import {
  homeRoute,
  postsRoute,
  feedsRoute,
  appreciationRoute,
} from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/", homeRoute);
app.use("/posts", postsRoute);
app.use("/feeds", feedsRoute);
app.use("/appreciation", appreciationRoute);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log("⚡[server]: Server is running on port:", PORT)
    );
  })
  .catch((error) => {
    console.log("Error-=-=-", error.message);
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
