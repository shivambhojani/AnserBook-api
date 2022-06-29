import express from "express";
import { PORT } from "./constants/index.js";
import { homeRoute, postsRoute } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/posts", postsRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log("⚡[server]: Server is running on port:", PORT);
});
