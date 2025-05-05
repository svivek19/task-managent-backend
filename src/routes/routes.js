import e from "express";
import userRoute from "./user.route.js";
import taskRouter from "./task.route.js";
const router = e.Router();

router.use("/user", userRoute);
router.use("/task", taskRouter);

export default router;
