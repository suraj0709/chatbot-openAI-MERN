import { Router } from "express";
import {
  getAllUser,
  userLogin,
  userSignup,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validator.js";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);

export default userRouter;
