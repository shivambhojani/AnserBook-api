import { authService } from "../services/index.js";

// for login
const loginUser = (req, res) => {
  const loginUser = authService.loginService(req.body, res);
};

const registerUser = (req, res) => {
  const registered = authService.registerService(req.body, res);
};

const forgetPasswordUser = (req, res) => {
  const fp = authService.fpService(req.body, res);
};

export const authController = {
  loginUser,
  registerUser,
  forgetPasswordUser,
};
