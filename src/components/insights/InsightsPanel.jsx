import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import InsightCard from "./InsightCard";
import {
  getTopCategory,
  getMonthlyComparison,
  getInsightMessage
} from "../../utils/calculations";

const InsightsPanel = () => {
  const { transactions } = useContext(AppContext);

  const { topCategory, amount } = getTopCategory(transactions);

  const { currentTotal, lastTotal } =
    getMonthlyComparison(transactions);

  const message = getInsightMessage(currentTotal, lastTotal);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <InsightCard title="Highest Spending Category">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {topCategory} (₹{amount})
        </p>
      </InsightCard>

      <InsightCard title="Monthly Comparison">
        <div className="space-y-1 text-gray-700 dark:text-gray-300">
          <p>This Month: ₹{currentTotal}</p>
          <p>Last Month: ₹{lastTotal}</p>
        </div>
      </InsightCard>

      <InsightCard title="Insight">
        <p className="text-gray-700 dark:text-gray-300">
          {message}
        </p>
      </InsightCard>

    </div>
  );
};

export default InsightsPanel;