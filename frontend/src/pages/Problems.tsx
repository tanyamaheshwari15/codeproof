import ProblemCard from "../components/ui/ProblemCard";
import { useState, useEffect } from "react";
import api from "../services/api";

type ProblemData = {
  problems: {
    _id: string;
    title: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category: string;
  }[];
};

function Problems() {

  const [ProblemData, setProblemData] = useState<ProblemData | null>(null);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await api.get("/getProblems");
        setProblemData(response.data);
      } catch (error) {
        console.error("Error fetching problem data:", error);
      }
    }

    fetchProblemData();
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl text-gray-600">
          Practice coding problems and improve your skills.
        </h1>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          All
        </button>

        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Easy
        </button>

        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Medium
        </button>

        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Hard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {ProblemData?.problems.map((problem) => (
          <ProblemCard
            key={problem._id}
            title={problem.title}
            description={problem.description}
            difficulty={problem.difficulty}
            category={problem.category}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Problems;