import express from "express";
import { run } from "../controllers/runController.js";
import { isloggedin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/run", isloggedin, run);

export default router;