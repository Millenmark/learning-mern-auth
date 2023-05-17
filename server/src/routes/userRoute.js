import { Router } from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/", registerUser);
userRoute.post("/auth", authUser);
userRoute.post("/logout", logoutUser);
userRoute.route("/profile").get(getUserProfile).put(updateUserProfile)

export default userRoute;
