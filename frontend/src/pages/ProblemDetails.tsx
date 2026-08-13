import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from '../services/api';

type ProblemById = {
  problem: {
    _id: string,
    title: string,
    description: string,
    difficulty: "Easy" | "Medium" | "Hard",
    examples: {
      input: string;
      output: string;
      explanation?: string;
    }[];
    constraints: string[];
    category: string,
  }
}

function ProblemDetails() {
  const navigate = useNavigate();
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
    }

    fetchProblemData();
  },[id])

  return(
     <div className="h-[calc(100vh-0px)] flex flex-col">

        {/* Top Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Problem Details
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Read the problem and solve it.
              </p>
              </div>

              <button onClick={(e) => {e.stopPropagation(); navigate(`/workspace/${id}`)}} className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition">
                Solve
              </button>

          </div>
        </div>

        {/* Problem Panel */}
        <div className="bg-gray-50 overflow-y-auto">

          <div className="p-6">

            {/* Problem Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {problemData?.problem.title}
              </h2>

              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                {problemData?.problem.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-500">
                {problemData?.problem.category}
              </span>

            </div>

            {/* Description */}
            <div className="mt-8">

              <h3 className="font-semibold text-gray-900 mb-3">
                Description
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {problemData?.problem.description}
              </p>

            </div>

            {/* Example */}
            <div className="mt-8">

              <h3 className="font-semibold text-gray-900 mb-3">
                Example
              </h3>

              <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-700">
                <p>
                  {problemData?.problem.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-700 mb-4">
                    <p>
                      <span className="font-semibold">Input:</span> {example.input}
                    </p>

                    <p className="mt-2">
                      <span className="font-semibold">Output:</span> {example.output}
                    </p>

                    {example.explanation && (
                      <p className="mt-2 font-sans text-gray-600">
                        <span className="font-semibold">Explanation:</span> {example.explanation}
                      </p>
                    )}
                  </div>
                ))}
                </p>
              </div>

            </div>

            {/* Constraints */}
            <div className="mt-8">

              <h3 className="font-semibold text-gray-900 mb-3">
                Constraints
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                <ul className="list-disc pl-5 text-sm leading-6 text-gray-600 space-y-1">
                  {problemData?.problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </p>

            </div>

          </div>

        </div>

    </div>
  )
}

export default ProblemDetails;