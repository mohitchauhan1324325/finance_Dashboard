import { useNavigate } from "react-router-dom";
import CategoryChart from "../components/dashboard/CategoryChart";
import SummaryCard from "../components/dashboard/SummaryCard";
import TimeBasedChart from "../components/dashboard/TimeBasedChart";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const { loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full"></div>
      </div>
    );
  }

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow"
        >
          <SummaryCard />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow"
          >
            <TimeBasedChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow"
          >
            <CategoryChart />
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;