import Submission from "../models/Submission.js";
import Problem from "../models/Problem.js";

export const createSubmission = async (req, res) => {
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

        const submission = await Submission.create({
            user: req.user.userId,
            problem,
            code,
            language
        });
        return res.status(201).json({
            message: "Submission created successfully",
            submission,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Error creating submission",
        });
    }
};

export const getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find({ user: req.user.userId })
        .populate("problem", "title difficulty category")
        .sort({ createdAt: -1 });
        return res.status(200).json({ submissions });   
    } catch (error) {
        return res.status(500).json({ message: "Error fetching submissions" });
    }
};

export const getSubmissionById = async (req, res) => {
    try {
        const submission = await Submission.findOne({
            _id: req.params.id,
            user: req.user.userId
        }).populate("problem", "title difficulty category");

        if(!submission){
            return res.status(404).json({
                message: "Submission not found"
            });
        }

        return res.status(201).json({ submission });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching submission"
        });
    }  
};