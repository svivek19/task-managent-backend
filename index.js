import express from "express";
import connectDB from "./src/config/db.js";

const app = express();
const port = 5050;

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`🚀 Server running on ${port}`);
});
