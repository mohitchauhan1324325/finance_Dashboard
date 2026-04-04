const InsightCard = ({ title, children }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="mt-2 text-lg font-semibold">
        {children}
      </div>
    </div>
  );
};

export default InsightCard;