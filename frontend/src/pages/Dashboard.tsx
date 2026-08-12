import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import api from "../services/api";

type UserData = {
  user: {
    name: string,
    email: string
  }
}

function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await api.get("/auth/user");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {userData?.user.name || "User"}! 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Keep practicing and improve your coding skills.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <Card
          title="Problems Solved"
          value="42"
          subtitle="+5 this week"
          icon="bi-check-circle"
        />

        <Card
          title="Current Streak"
          value="7 days"
          subtitle="Keep it going!"
          icon="bi-fire"
        />

        <Card
          title="Accuracy"
          value="78%"
          subtitle="+4% this month"
          icon="bi-bullseye"
        />

        <Card
          title="Submissions"
          value="126"
          subtitle="18 this week"
          icon="bi-code-square"
        />

      </div>

      {/* Continue Coding + Progress */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Continue Coding */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Continue Coding
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Pick up where you left off.
              </p>
            </div>

            <i className="bi bi-code-slash text-xl text-blue-600"></i>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mt-5">

            <div className="flex items-start justify-between">

              <div>
                <h3 className="font-semibold text-gray-900">
                  Two Sum
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Array · Easy
                </p>
              </div>

              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                In Progress
              </span>

            </div>

            <div className="flex items-center justify-between mt-6">

              <p className="text-sm text-gray-500">
                Last attempted 2 hours ago
              </p>

              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Continue
              </button>

            </div>

          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Progress Overview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your problem-solving progress.
              </p>
            </div>

            <i className="bi bi-graph-up text-xl text-blue-600"></i>

          </div>

          <div className="space-y-5 mt-6">

            {/* Easy */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Easy
                </span>

                <span className="text-sm text-gray-500">
                  25 / 40
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: "62.5%" }}
                ></div>
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Medium
                </span>

                <span className="text-sm text-gray-500">
                  12 / 40
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-yellow-500 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            {/* Hard */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Hard
                </span>

                <span className="text-sm text-gray-500">
                  5 / 20
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-red-500 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Recent Submissions */}
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Recent Submissions
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your latest coding activity.
            </p>
          </div>

          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all
          </button>

        </div>

        <div className="overflow-x-auto mt-6">

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-gray-200 text-left">

                <th className="pb-3 font-medium text-gray-500">
                  Problem
                </th>

                <th className="pb-3 font-medium text-gray-500">
                  Language
                </th>

                <th className="pb-3 font-medium text-gray-500">
                  Status
                </th>

                <th className="pb-3 font-medium text-gray-500">
                  Time
                </th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-200">

                <td className="py-4 text-gray-800">
                  Two Sum
                </td>

                <td className="py-4 text-gray-500">
                  Java
                </td>

                <td className="py-4">
                  <span className="text-green-600 font-medium">
                    Accepted
                  </span>
                </td>

                <td className="py-4 text-gray-500">
                  2 hours ago
                </td>

              </tr>

              <tr className="border-b border-gray-200">

                <td className="py-4 text-gray-800">
                  Binary Search
                </td>

                <td className="py-4 text-gray-500">
                  C++
                </td>

                <td className="py-4">
                  <span className="text-red-500 font-medium">
                    Wrong Answer
                  </span>
                </td>

                <td className="py-4 text-gray-500">
                  Yesterday
                </td>

              </tr>

              <tr>

                <td className="py-4 text-gray-800">
                  Valid Parentheses
                </td>

                <td className="py-4 text-gray-500">
                  Java
                </td>

                <td className="py-4">
                  <span className="text-green-600 font-medium">
                    Accepted
                  </span>
                </td>

                <td className="py-4 text-gray-500">
                  2 days ago
                </td>

              </tr>

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;