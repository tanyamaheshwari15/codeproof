import express from "express";
const app = express();
import cors from "cors";

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "CodeProof API is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success:true,
        message: "CodeProof API is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});