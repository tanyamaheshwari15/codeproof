import Problem from "../models/Problem.js";

export const createProblems = async (req, res) => {
    try {
        const { title, description, difficulty, examples, constraints, category, testCases } = req.body

        if(!title || !description || !difficulty || !examples?.length || !category || !testCases){
            return res.status(400).json({ message: "All field are required" })
        }

        const existingProblem = await Problem.findOne({ title })
        if(existingProblem){
            return res.status(409).json({
                message: "Problem exists",
            });
        }

        const problem = await Problem.create({
            title,
            description,
            difficulty,
            examples,
            constraints,
            category,
            testCases
        });
        return res.status(201).json(
            { 
                message: "Problem created successfully",
                problem
            }
        );

    } catch (error) {
        return res.status(500).json({ message: "Error creating problem" })
    }
};

export const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find();
        return res.status(200).json({ problems })
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving problems" })
    }
};

export const getProblemById = async (req, res) => {
    try {
        const { id } = req.params
        const problem = await Problem.findById(id);
        if (!problem) {
            return res.status(404).json({
                message: "Problem not found"
            });
        }
        return res.status(200).json({ problem })
    } catch (error) {
        return res.status(500).json({ message: "Error finding problem" })
    }
};