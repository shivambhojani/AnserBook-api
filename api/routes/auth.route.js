import { Router } from "express";
import { authController } from "../controllers/index.js";

const authRoute = Router();

authRoute.post("/login", authController.loginUser);
authRoute.post("/register", authController.registerUser);
authRoute.post("/fp", authController.forgetPasswordUser);

export default authRoute;
