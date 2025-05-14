import mongoose from "mongoose";

const userSchemas = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("user", userSchemas);
export default Users;
