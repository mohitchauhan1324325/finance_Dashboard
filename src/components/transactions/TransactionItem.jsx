import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction, role } = useContext(AppContext);

  const handleDelete = (id) => {
    if (!id) {
      console.error("Invalid ID:", id);
      return;
    }

    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;

    deleteTransaction(id);
  };

  if (!transaction) return null;

  return (
    <div className="flex justify-between items-center p-3 border rounded shadow-sm bg-white dark:bg-gray-800">

     <div>
        <p className="text-sm text-gray-500">{transaction.date}</p>
        <p className="font-semibold text-black dark:text-white">
          {transaction.category}
        </p>
      </div>

      <div className="text-right">
        <p
          className={`font-bold ${
            transaction.type === "income"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          ₹{transaction.amount}
        </p>

        <p className="text-xs text-gray-500">{transaction.type}</p>

        {role === "admin" && (
          <button
            onClick={() => handleDelete(transaction.id)}
            className="text-red-500 text-xs mt-1 hover:underline"
          >
            Delete
          </button>
        )}
      </div>

    </div>
  );
};

export default TransactionItem;