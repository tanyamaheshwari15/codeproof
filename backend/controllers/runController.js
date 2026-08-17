import Problem from "../models/Problem.js";
import Submission from "../models/Submission.js";

export const run = async (req, res) => {
    try {
        const {problem, code, language} = req.body;
        if(!problem || !code || !language){
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const existingProblem = await Problem.findById(problem);
        if(!existingProblem){
            return res.status(404).json({
                message: "Problem not found",
            });
        }
        const result = existingProblem.testCases;
        return res.status(200).json({
           message: "Code is running",
           result
        });

    } catch (error) {
         console.error("RUN ERROR:", error);
        return res.status(500).json({
            message: "Error running code",
        });
    }
};