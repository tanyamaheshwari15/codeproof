import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT;

connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
    res.json({
        success:true,
        message: "CodeProof API is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});