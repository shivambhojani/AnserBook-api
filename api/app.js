import express from "express";
import { PORT } from "./constants/index.js";
import { homeRoute, postRoute } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/post", postRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log("⚡[server]: Server is running on port:", PORT);
});
