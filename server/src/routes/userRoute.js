import { Router } from "express";
import { authUser } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/")
userRoute.post("/auth", authUser);
userRoute.post("/logout")
userRoute.get("/profile")
userRoute.put("/profile")

export default userRoute;
