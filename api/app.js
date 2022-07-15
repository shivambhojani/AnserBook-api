import express from "express";
import { PORT, CONNECTION_URL } from "./constants/index.js";
import { mongoose } from "mongoose";

import {
  homeRoute,
  postsRoute,
  feedsRoute,
  appreciationRoute,
  offer_appreciationRoute,
  authRoute,
} from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/posts", postsRoute);
app.use("/auth", authRoute);
app.use("/feed", postsRoute);
app.use("/feeds", feedsRoute);
app.use("/appreciation", appreciationRoute);
app.use("/offerscore", offer_appreciationRoute);
app.use("/", homeRoute);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log("⚡[server]: Server is running on port:", PORT),
    );
  })
  .catch(error => {
    console.log("Error-=-=-", error.message);
  });
