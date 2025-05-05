import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },
    dueDate: { type: Date, required: true },
    assignTo: {
      type: [
        {
          email: { type: String, required: true },
          status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending",
            required: true,
          },
        },
      ],
      required: true,
    },
    todoCheckList: {
      type: [
        {
          text: { type: String, required: true },
          isCompleted: { type: Boolean, default: false },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
