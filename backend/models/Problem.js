import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        difficulty: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            required: true
        },
        examples: [
        {
            input: {
            type: String,
            required: true
            },
            output: {
            type: String,
            required: true
            },
            explanation: {
            type: String
            }
        }
        ],
        constraints: [
        {
            type: String
        }
        ],
        testCases: [
        {
            input: {
            type: String,
            required: true
            },
            expectedOutput: {
            type: String,
            required: true
            }
        }
        ],
        category: {
            type: String,
            required: true,
            trim: true
        },
    },

    {
        timestamps: true
    }
);

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;