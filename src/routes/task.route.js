import express from "express";
import {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const taskRouter = express.Router();

taskRouter.get("/get/:id", authMiddleware, getTaskById);
taskRouter.get("/get-all", authMiddleware, getTasks);
taskRouter.post("/create", authMiddleware, createTask);
taskRouter.patch("/update", authMiddleware, updateTask);

export default taskRouter;
