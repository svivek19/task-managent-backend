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
