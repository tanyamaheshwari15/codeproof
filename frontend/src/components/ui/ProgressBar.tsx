type ProgressBarProps = {
  label: string;
  value: number;
  color?: string;
};

function ProgressBar({
  label,
  value,
  color = "bg-blue-600",
}: ProgressBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-700">
          {label}
        </span>

        <span className="text-sm text-gray-500">
          {value}%
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;