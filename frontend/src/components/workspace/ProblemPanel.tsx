type Problem = {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
};

type ProblemPanelProps = {
  problem: Problem | undefined;
};

function ProblemPanel({ problem }: ProblemPanelProps) {
  return (
    <div className="w-[40%] bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-6">

        {/* Problem Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {problem?.title}
          </h2>

          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
            {problem?.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-gray-500">
            {problem?.category}
          </span>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3">
            Description
          </h3>

          <p className="text-sm leading-6 text-gray-600">
            {problem?.description}
          </p>
        </div>

        {/* Examples */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3">
            Examples
          </h3>

          {problem?.examples.map((example, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm text-gray-700"
            >
              <p>
                <span className="font-semibold">Input:</span>{" "}
                {example.input}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Output:</span>{" "}
                {example.output}
              </p>

              {example.explanation && (
                <p className="mt-2 font-sans text-gray-600">
                  <span className="font-semibold">Explanation:</span>{" "}
                  {example.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Constraints */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3">
            Constraints
          </h3>

          <ul className="list-disc pl-5 text-sm leading-6 text-gray-600 space-y-1">
            {problem?.constraints.map((constraint, index) => (
              <li key={index}>
                {constraint}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ProblemPanel;