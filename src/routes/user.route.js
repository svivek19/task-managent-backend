import express from "express";
import {
  createUser,
  deleteUser,
  getEmployees,
  getUser,
  loginUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.post("/login", loginUser);
userRoute.get("/get", authMiddleware, getUser);
userRoute.get("/get-employee", authMiddleware, getEmployees);
userRoute.delete("/delete/:_id", authMiddleware, deleteUser);

export default userRoute;
