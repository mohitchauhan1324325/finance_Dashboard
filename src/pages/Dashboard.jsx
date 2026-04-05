import { useNavigate } from "react-router-dom";
import CategoryChart from "../components/dashboard/CategoryChart";
import SummaryCard from "../components/dashboard/SummaryCard";
import TimeBasedChart from "../components/dashboard/TimeBasedChart";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-3 py-4 sm:px-4 sm:py-6 md:px-8">

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6">

        <button
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/transaction")}
        >
          Transactions
        </button>

        <button
          className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          onClick={() => navigate("/insights")}
        >
          Insights
        </button>

      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 text-gray-900 dark:text-white">

        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Overview
          </h2>
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow">
            <SummaryCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Balance Trend
            </h2>
            <TimeBasedChart />
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Spending Breakdown
            </h2>
            <CategoryChart />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;