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
      type: [String],
      required: true,
    },
    todoCheckList: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Task", taskSchema);
export default Tasks;
