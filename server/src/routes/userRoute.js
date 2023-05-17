import { Router } from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRoute = Router();

userRoute.post("/", registerUser);
userRoute.post("/auth", authUser);
userRoute.post("/logout", logoutUser);
userRoute
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default userRoute;
