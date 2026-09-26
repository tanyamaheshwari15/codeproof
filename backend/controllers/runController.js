import Problem from "../models/Problem.js";
import Submission from "../models/Submission.js";

const JUDGE0_URL=process.env.JUDGE0_URL || "http://localhost:2358";

const languageIds = {
    java: 62,
    cpp: 54,
    python: 71,
};

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

        const language_id = languageIds[language];

        if (!language_id) {
            return res.status(400).json({
                message: "Unsupported language",
            });
        }


        const testCase = existingProblem.testCases[0];
        const judgeResponse = await fetch(
            `${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    source_code: code,
                    language_id,
                    stdin: testCase.input,
                }),
            }
        );

        const { token } = await judgeResponse.json();

        let result;

        while (true) {
            const resultResponse = await fetch(
                `${JUDGE0_URL}/submissions/${token}?base64_encoded=false`
            );

            result = await resultResponse.json();

            if (result.status.id > 2) {
                break;
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log("EXECUTION RESULT:", result);

        return res.status(200).json({
            message: "Code executed",
            result,
        });

        return res.status(200).json({
            message: "Code executed",
            result: executionResult,
        });

    } catch (error) {
         console.error("RUN ERROR:", error);
        return res.status(500).json({
            message: "Error running code",
        });
    }
};