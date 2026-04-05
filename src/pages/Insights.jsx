import { useContext } from "react";
import InsightsPanel from "../components/insights/InsightsPanel";
import { AppContext } from "../context/AppContext";

const Insights = () => {

  const { loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">

      <div className="max-w-6xl mx-auto space-y-6 text-gray-900 dark:text-white">

        <h1 className="text-3xl font-semibold">Insights</h1>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
          <InsightsPanel />
        </div>

      </div>

    </div>
  );
};

export default Insights;