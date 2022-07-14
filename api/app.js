import express from "express";
import { PORT, CONNECTION_URL } from "./constants/index.js";
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
app.use("/feed", postsRoute);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("⚡[server]: Server is running on port:", PORT)
    );
  })
  .catch((error) => {
    console.log("Error-=-=-", error.message);
  });
