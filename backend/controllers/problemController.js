import Problem from "../models/Problem.js";

export const createProblems = async (req, res) => {
    try {
        const { title, description, difficulty, category } = req.body

        if(!title || !description || !difficulty || !category){
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
            category
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