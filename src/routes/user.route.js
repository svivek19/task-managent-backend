import express from "express";
import {
  createUser,
  getUser,
  loginUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.post("/login", loginUser);
userRoute.get("/get", authMiddleware, getUser);

export default userRoute;
