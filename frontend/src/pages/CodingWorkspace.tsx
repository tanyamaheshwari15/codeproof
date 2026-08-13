import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import ProblemPanel from "../components/workspace/ProblemPanel";
import CodeEditor from "../components/workspace/CodeEditor";

type ProblemById = {
  problem: {
    _id: string;
    title: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    examples: {
      input: string;
      output: string;
      explanation?: string;
    }[];
    constraints: string[];
    category: string;
  };
};

function CodingWorkspace() {

  const { id } = useParams();
  const [problemData, setProblemData] = useState<ProblemById | null>(null);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await api.get(`/problem/${id}`);
        setProblemData(response.data);
      } catch (error) {
        console.error("Error fetching problem data:", error);
      }
    };

    fetchProblemData();
  }, [id]);

  return (
    <div className="h-screen flex flex-col">

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-semibold text-gray-700">
          Coding Workspace
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Solve the problem and submit your solution.
        </p>
      </div>

      {/* Workspace */}
      <div className="flex flex-1 min-h-0">
        <ProblemPanel problem={problemData?.problem} />
        <CodeEditor />
      </div>

    </div>
  );
}

export default CodingWorkspace;