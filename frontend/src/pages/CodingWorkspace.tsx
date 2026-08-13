import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
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
    }

    fetchProblemData();
  },[id])

  return (
    <div className="h-[calc(100vh-0px)] flex flex-col">

      {/* Top Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-700 mt-1">
              Coding Workspace
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Solve the problem and submit your solution.
            </p>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 min-h-0">

        {/* Problem Panel */}
        <div className="w-[40%] bg-gray-50 border-r border-gray-200 overflow-y-auto">

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

            {/* Constraint */}
           <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-3">
                Constraints
              </h3>

              <ul className="list-disc pl-5 text-sm leading-6 text-gray-600 space-y-1">
                {problemData?.problem.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 min-w-0 flex flex-col bg-gray-900">

          {/* Editor Toolbar */}
          <div className="h-14 px-4 flex items-center justify-between border-b border-gray-700 bg-gray-900">

            <select className="bg-gray-800 text-gray-200 text-sm rounded-md px-3 py-2 border border-gray-700 outline-none">
              <option>Java</option>
              <option>JavaScript</option>
              <option>C++</option>
              <option>Python</option>
            </select>

            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition">
              Run
            </button>

          </div>

          {/* Monaco */}
          <div className="flex-1 min-h-0">
            <Editor
              height="100%"
              defaultLanguage="java"
              defaultValue="// Type your code here..."
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
                fontSize: 14,
                padding: {
                  top: 16,
                },
                automaticLayout: true,
              }}
            />
          </div>

          {/* Console */}
          <div className="h-40 border-t border-gray-700 bg-gray-950">

            <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">
                Test Results
              </span>

              <span className="text-xs text-gray-500">
                No tests run
              </span>
            </div>

            <div className="p-4 text-sm text-gray-500">
              Run your code to see the results here.
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="h-16 px-4 flex items-center justify-between border-t border-gray-700 bg-gray-900">

            <span className="text-xs text-gray-500">
              Ready to run
            </span>

            <button className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition">
              Submit
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CodingWorkspace;