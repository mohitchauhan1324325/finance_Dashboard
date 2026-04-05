import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction, role } = useContext(AppContext);

  const handleDelete = (id) => {
    if (!id) return;
    const ok = window.confirm("Delete?");
    if (!ok) return;
    deleteTransaction(id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800"
    >
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {transaction.date}
        </p>
        <p className="text-gray-900 dark:text-white font-medium">
          {transaction.category}
        </p>
      </div>

      <div className="text-right">
        <p className={`font-semibold ${
          transaction.type === "income" ? "text-green-600" : "text-red-600"
        }`}>
          ₹{transaction.amount}
        </p>

        {role === "admin" && (
          <button
            onClick={() => handleDelete(transaction.id)}
            className="text-xs text-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TransactionItem;