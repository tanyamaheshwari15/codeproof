type ProblemCardProps = {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
};

export default function ProblemCard({
  title,
  description,
  difficulty,
  category,
}: ProblemCardProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
          {difficulty}
        </span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between mt-5">
        <span className="text-sm text-gray-500">
          {category}
        </span>

        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition">
          Solve
        </button>
      </div>
    </div>
  );
}