import express from "express";
import { registerUser, loginUser, logoutUser, getCurrentUser } from "../controllers/authController.js";
import { isloggedin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", isloggedin, logoutUser);
router.get("/user", isloggedin, getCurrentUser);

export default router;