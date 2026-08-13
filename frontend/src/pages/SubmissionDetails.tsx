import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from '../services/api';

type SubmissionById = {
  submission: {
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
    executionTime: number,
    memoryUsed: number,
    createdAt: string,
  }
}

function SubmissionDetails() {
  const { id } = useParams();
  const [submissionData, setSubmissionData] = useState<SubmissionById | null>(null);

  useEffect(() => {
    const fetchSubmissionData = async () => {
      try {
        const response = await api.get(`/submission/${id}`);
        setSubmissionData(response.data);
      } catch (error) {
        console.error("Error fetching submission data:", error);
      }
    }

    fetchSubmissionData();
  },[id])

  return (
    <div className="p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-semibold text-gray-900">
            Submission Details
            </h1>

            <p className="text-sm text-gray-500 mt-1">
            Review your submitted solution and execution details.
            </p>
        </div>

        <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg
                    text-gray-700 hover:bg-gray-100 transition">
            ← Back
        </button>
        </div>


        {/* Problem Information */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        <div className="flex items-center justify-between">

            <div>
            <h2 className="text-xl font-semibold text-gray-900">
                {submissionData?.submission.problem.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
                {submissionData?.submission.problem.category}
            </p>
            </div>

            <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
            {submissionData?.submission.problem.difficulty}
            </span>

        </div>

        </div>


        {/* Submission Information */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-900 mb-5">
            Submission Information
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div>
            <p className="text-sm text-gray-500">
                Status
            </p>

            <p className="mt-1 font-medium text-green-600">
                {submissionData?.submission.status}
            </p>
            </div>


            <div>
            <p className="text-sm text-gray-500">
                Language
            </p>

            <p className="mt-1 font-medium text-gray-900">
                {submissionData?.submission.language}
            </p>
            </div>


            <div>
            <p className="text-sm text-gray-500">
                Execution Time
            </p>

            <p className="mt-1 font-medium text-gray-900">
                {submissionData?.submission.executionTime} ms
            </p>
            </div>


            <div>
            <p className="text-sm text-gray-500">
                Memory Used
            </p>

            <p className="mt-1 font-medium text-gray-900">
                {submissionData?.submission.memoryUsed} MB
            </p>
            </div>

        </div>

        <div className="mt-5 pt-5 border-t border-gray-100">

            <p className="text-sm text-gray-500">
            Submitted At
            </p>

            <p className="mt-1 text-sm font-medium text-gray-900">
            {submissionData?.submission.createdAt ? new Date(
                submissionData.submission.createdAt).toLocaleString("en-IN") : "-"}
            </p>

        </div>

        </div>


        {/* Submitted Code */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-sm">

        <div className="px-5 py-3 border-b border-gray-700 flex items-center justify-between">

            <h2 className="text-sm font-medium text-gray-200">
            Submitted Code
            </h2>

            <span className="text-xs text-gray-400">
            {submissionData?.submission.language}
            </span>

        </div>


        <pre className="p-6 overflow-x-auto text-sm leading-6 text-gray-200">
            <code>
            {submissionData?.submission.code}
            </code>
        </pre>

        </div>

    </div>
    );
}

export default SubmissionDetails;