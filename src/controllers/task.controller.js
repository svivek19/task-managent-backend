import Tasks from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const task = new Tasks(req.body);
    const response = await task.save();
    return res.status(201).json({ message: "Task created", response });
  } catch (error) {
    console.error("Create Task Error:", error.message);
    return res
      .status(500)
      .json({ message: "Failed to create task", error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
};
