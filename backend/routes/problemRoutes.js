import express from "express";
import { createProblems, getProblems } from "../controllers/problemController.js";

const router = express.Router();

router.post("/problems", createProblems);
router.get("/getProblems", getProblems);

export default router;