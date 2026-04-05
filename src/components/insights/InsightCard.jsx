const InsightCard = ({ title, children }) => {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <div className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
        {children}
      </div>

    </div>
  );
};

export default InsightCard;