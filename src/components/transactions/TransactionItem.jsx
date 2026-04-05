import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction, role } = useContext(AppContext);

  const handleDelete = (id) => {
    if (!id) return;

    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;

    deleteTransaction(id);
  };

  if (!transaction) return null;

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">

      <div className="flex flex-col">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {transaction.date}
        </p>
        <p className="font-medium text-gray-900 dark:text-white">
          {transaction.category}
        </p>
      </div>

      <div className="text-right flex flex-col items-end">
        <p
          className={`text-lg font-semibold ${
            transaction.type === "income"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          ₹{transaction.amount}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
          {transaction.type}
        </p>

        {role === "admin" && (
          <button
            onClick={() => handleDelete(transaction.id)}
            className="text-xs mt-1 text-red-500 hover:text-red-600 transition"
          >
            Delete
          </button>
        )}
      </div>

    </div>
  );
};

export default TransactionItem;