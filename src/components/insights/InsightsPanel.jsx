import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import InsightCard from "./InsightCard";
import {
  getTopCategory,
  getMonthlyComparison,
  getInsightMessage
} from "../../utils/calculations";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const InsightsPanel = () => {
  const { transactions } = useContext(AppContext);

  const { topCategory, amount } = getTopCategory(transactions);
  const { currentTotal, lastTotal } = getMonthlyComparison(transactions);
  const message = getInsightMessage(currentTotal, lastTotal);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >

      <motion.div variants={item}>
        <InsightCard title="Highest Spending Category">
          {topCategory} (₹{amount})
        </InsightCard>
      </motion.div>

      <motion.div variants={item}>
        <InsightCard title="Monthly Comparison">
          <div>
            <p>This Month: ₹{currentTotal}</p>
            <p>Last Month: ₹{lastTotal}</p>
          </div>
        </InsightCard>
      </motion.div>

      <motion.div variants={item}>
        <InsightCard title="Insight">
          {message}
        </InsightCard>
      </motion.div>

    </motion.div>
  );
};

export default InsightsPanel;