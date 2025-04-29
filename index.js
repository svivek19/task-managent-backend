import express from "express";
import connectDB from "./src/config/db.js";
import router from "./src/routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

app.use("/", router);

connectDB();

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
