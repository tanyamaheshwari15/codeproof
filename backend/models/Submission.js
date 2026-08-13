import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        problem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true
        },
        code: {
            type: String,
            required: true
        },
        language: {
            type: String,
            enum: ["Java", "JavaScript", "C++", "Python"],
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Accepted", "Wrong Answer", "Runtime Error", "Compilation Error"],
            default: "Pending"
        },
        executionTime: {
            type: Number,
            default: 0,
        },
        memoryUsed: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;