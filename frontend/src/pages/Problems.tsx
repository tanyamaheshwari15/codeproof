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

type FormData = {
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

function Problems() {

  const [ProblemData, setProblemData] = useState<ProblemData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All")
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    difficulty: "Easy",
    examples: [
      {
        input: "",
        output: "",
        explanation: "",
      },
    ],
    constraints: [""],
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleExampleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "input" | "output" | "explanation" ) => {
    setFormData({
      ...formData,
      examples: [
        {
          ...formData.examples[0],
          [field]: e.target.value,
        },
      ],
    });
  };

  const handleConstraintChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      constraints: [e.target.value],
    });
  };

  const handleSubmit = async () => {
      try {
        await api.post("/problems", formData);
        await fetchProblemData();
        setShowModal(false);
      } catch (error) {
        console.error("Error during problem creation:", error);
      }
  }

  const fetchProblemData = async () => {
    try {
      const response = await api.get("/getProblems");
      setProblemData(response.data);
    } catch (error) {
      console.error("Error fetching problem data:", error);
    }
  }

  useEffect(() => {
    fetchProblemData();
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl text-gray-600">
          Practice coding problems and improve your skills.
        </h1>

        <button type="button" onClick={() => setShowModal(true)} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <i className="bi bi-plus-lg mr-2"></i> Add
        </button>
      </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-xl bg-white shadow-xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b">
                <h2 className="text-lg font-semibold text-blue-900">
                  Add Problem
                </h2>

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <input value={formData.title} onChange={handleInputChange} type="text" className="rounded mb-3 w-full border border-slate-300 hover:border-slate-400" id="title" placeholder=" Title"></input>
                <textarea value={formData.description} onChange={handleInputChange} className="rounded mb-3 w-full border border-slate-300 hover:border-slate-400" id="description" placeholder=" Description"></textarea>
                <select value={formData.difficulty} onChange={handleInputChange} className="rounded mb-3 w-full text-gray-500 border border-slate-300 hover:border-slate-400" id="difficulty">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
                <input
                  value={formData.examples[0].input}
                  onChange={(e) => handleExampleChange(e, "input")}
                  type="text"
                  className="rounded mb-3 w-full border border-slate-300 hover:border-slate-400"
                  placeholder="Example Input"
                />
                <input
                  value={formData.examples[0].output}
                  onChange={(e) => handleExampleChange(e, "output")}
                  type="text"
                  className="rounded mb-3 w-full border border-slate-300 hover:border-slate-400"
                  placeholder="Example Output"
                />
                <textarea
                  value={formData.examples[0].explanation}
                  onChange={(e) => handleExampleChange(e, "explanation")}
                  className="rounded mb-3 w-full border border-slate-300 hover:border-slate-400"
                  placeholder="Example Explanation"
                />
                <input value={formData.constraints[0]} onChange={handleConstraintChange} type="text" className="rounded w-full border border-slate-300 hover:border-slate-400" placeholder=" Constraints"></input>
                <input value={formData.category} onChange={handleInputChange} type="text" className="rounded w-full border border-slate-300 hover:border-slate-400" id="category" placeholder=" Category"></input>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                  Close
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                  Save changes
                </button>
              </div>

            </form>
          </div>
        )}

      <div className="flex flex-wrap gap-3">
        <button onClick={()=>setFilter("All")} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          All
        </button>

        <button onClick={()=>setFilter("Easy")} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Easy
        </button>

        <button onClick={()=>setFilter("Medium")} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Medium
        </button>

        <button onClick={()=>setFilter("Hard")} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Hard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {ProblemData?.problems.filter((problem) => filter === "All" || problem.difficulty === filter)
        .map((problem) => (
          <ProblemCard
            _id={problem._id}
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