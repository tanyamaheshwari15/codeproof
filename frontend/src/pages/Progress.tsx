import ProgressBar from "../components/ui/ProgressBar";

function Progress() {

  const difficulty = [
    { label: "Easy", value: 0, color: "bg-green-500" },
    { label: "Medium", value: 0, color: "bg-yellow-500" },
    { label: "Hard", value: 0, color: "bg-red-500" },
  ];

  const topics = [
    { label: "Arrays", value: 0 },
    { label: "Strings", value: 0 },
    { label: "Stack", value: 0 },
    { label: "Trees", value: 0 },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Progress
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Track your coding journey and identify areas for improvement.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">

        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Overall Progress
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Problems solved across all difficulty levels.
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-semibold">0%</p>
            <p className="text-xs text-gray-500">0 / 0 solved</p>
          </div>
        </div>

        <div className="h-3 bg-gray-200 rounded-full mt-5">
          <div className="h-3 bg-blue-600 rounded-full w-0" />
        </div>

        <div className="flex gap-10 mt-6 text-sm">
          <span>Easy: <b>0</b></span>
          <span>Medium: <b>0</b></span>
          <span>Hard: <b>0</b></span>
        </div>

      </div>

      {/* Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Difficulty */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">

          <h2 className="text-lg font-semibold">
            Difficulty Performance
          </h2>

          <div className="space-y-5 mt-6">
            {difficulty.map((item) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

        </div>

        {/* Topics */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">

          <h2 className="text-lg font-semibold">
            Topic Performance
          </h2>

          <div className="space-y-5 mt-6">
            {topics.map((item) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Activity */}
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">

        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Submission Activity
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your recent coding activity.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            0 submissions
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 mt-6 max-w-md">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className="h-7 rounded-md bg-gray-200"
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Progress;