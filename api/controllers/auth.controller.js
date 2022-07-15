import { authService } from "../services/index.js";

// for login
const loginUser = async (req, res) => {
  try {
    const result = await authService.loginService(req.body, res);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(result);
  }
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
