import express from "express";
import { createSubmission, getSubmissions, getSubmissionById } from "../controllers/submissionController.js";
import { isloggedin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submission", isloggedin, createSubmission);
router.get("/submissions", isloggedin, getSubmissions);
router.get("/submission/:id", isloggedin, getSubmissionById);

export default router;