import e from "express";
import userRoute from "./user.route.js";
const router = e.Router();

router.use("/user", userRoute);

export default router;
