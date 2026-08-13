import express from "express";
import { createProblems, getProblems, getProblemById } from "../controllers/problemController.js";

const router = express.Router();

router.post("/problems", createProblems);
router.get("/getProblems", getProblems);
router.get("/problem/:id", getProblemById);

export default router;