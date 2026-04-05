import { motion } from "framer-motion";
import TransactionItem from "./TransactionItem";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const TransactionList = ({ transactions }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="divide-y divide-gray-200 dark:divide-gray-700"
    >
      {transactions.map((t) => (
        <motion.div key={t.id} variants={item}>
          <TransactionItem transaction={t} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TransactionList;