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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <InsightCard title="Highest Spending Category">
        {topCategory} (₹{amount})
      </InsightCard>

      <InsightCard title="Monthly Comparison">
        <div>
          <p>This Month: ₹{currentTotal}</p>
          <p>Last Month: ₹{lastTotal}</p>
        </div>
      </InsightCard>

      <InsightCard title="Insight">
        {message}
      </InsightCard>

    </div>
  );
};

export default InsightsPanel;