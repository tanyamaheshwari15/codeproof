import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useState, useEffect } from "react";

type SubmissionData = {
  submissions: {
    _id: string;
    problem: {
      _id: string,
      title: string,
      difficulty: "Easy" | "Medium" | "Hard",
      category: string
    },
    code: string,
    language: string,
    status: string,
    createdAt: string,
  }[],
};

function Submissions() {

  const navigate = useNavigate();
  const [submissionData, setSubmissionData] = useState<SubmissionData | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get("/submissions")
        setSubmissionData(response.data);
      } catch (error) {
        
      }
    }

    fetchData();
  }, [])

  return (
    <div className="h-screen flex flex-col">

        <div className="p-4 border-b border-gray-200">
          <p className="text-xl text-gray-500 mt-1">
            Your latest coding activity.
          </p>
        </div>

        <div className="px-6 py-4 m-4 overflow-x-auto bg-gray-100 border border-gray-200 rounded-xl shadow-sm">

          <table className="w-full">

            <thead>
              <tr className="border-b border-gray-200 text-left">

                <th className="pb-3 font-medium text-gray-800">
                  Problem
                </th>

                <th className="pb-3 font-medium text-gray-800">
                  Difficulty
                </th>

                <th className="pb-3 font-medium text-gray-800">
                  Language
                </th>

                <th className="pb-3 font-medium text-gray-800">
                  Status
                </th>

                <th className="pb-3 font-medium text-gray-800">
                  Time
                </th>

              </tr>
            </thead>

            <tbody>

              {submissionData?.submissions.map((submission) => (
              <tr key={submission._id} className="border-b border-gray-200">

                <td className="py-4 text-gray-800">
                  {submission.problem.title}
                </td>

                <td className="py-4 text-gray-800">
                  {submission.problem.difficulty}
                </td>

                <td className="py-4 text-gray-800">
                  {submission.language}
                </td>

                <td className="py-4">
                  <span className="text-green-600 font-medium">
                    {submission.status}
                  </span>
                </td>

                <td className="py-4 text-gray-800">
                 { new Date(submission.createdAt).toLocaleString() }
                </td>

                <td>
                  <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                   onClick={() => navigate(`/submission/${submission._id}`)}>View</button>
                </td>

              </tr>
            ))}
            </tbody>

          </table>

        </div>
      </div>
  );
}

export default Submissions;