interface CardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function Card({
  title,
  value,
  subtitle,
  icon,
}: CardProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <i className={`bi ${icon} text-xl text-blue-600`}></i>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {subtitle}
      </p>
    </div>
  );
}