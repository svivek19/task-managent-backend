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

export const recentTasks = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const tasks = await Tasks.find({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for today" });
    }

    return res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
};

export const getTasksByAssigneeEmail = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const tasks = await Tasks.find({ "assignTo.email": email });

    if (!tasks || tasks.length === 0) {
      return res
        .status(404)
        .json({ message: "No tasks found for this assignee" });
    }

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks by assignee:", error.message);
    return res.status(500).json({
      message: "Failed to fetch tasks for assignee",
      error: error.message,
    });
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tasks.find({ _id: id });
    if (!task) return res.status(404).json({ message: "No tasks found" });
    return res.status(200).json(task[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id, updatedState } = req.body;

  try {
    const existingTask = await Tasks.findById(id);

    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await Tasks.findByIdAndUpdate(
      id,
      { $set: updatedState },
      { new: true }
    );

    return res.status(200).json({
      message: "Task updated successfully!",
      task: updatedTask,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update task", error: error.message });
  }
};
