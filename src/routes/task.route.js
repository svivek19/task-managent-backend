import express from "express";
import { createTask, getTasks } from "../controllers/task.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const taskRouter = express.Router();

taskRouter.get("/get-all", authMiddleware, getTasks);
taskRouter.post("/create", authMiddleware, createTask);

export default taskRouter;
