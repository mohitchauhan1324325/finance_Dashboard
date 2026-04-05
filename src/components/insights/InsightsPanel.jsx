import { motion } from "framer-motion";
import InsightCard from "./InsightCard";

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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <motion.div variants={item}>
        <InsightCard title="Highest Spending Category">
          Food (₹500)
        </InsightCard>
      </motion.div>

      <motion.div variants={item}>
        <InsightCard title="Monthly Comparison">
          Data
        </InsightCard>
      </motion.div>

      <motion.div variants={item}>
        <InsightCard title="Insight">
          Message
        </InsightCard>
      </motion.div>
    </motion.div>
  );
};

export default InsightsPanel;