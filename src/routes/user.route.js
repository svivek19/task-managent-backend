import express from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";
const userRoute = express.Router();

userRoute.post("/create", createUser);
userRoute.post("/login", loginUser);

export default userRoute;
