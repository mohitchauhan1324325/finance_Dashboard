import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionItem = ({ transaction }) => {
  const { transactions, setTransactions, role } = useContext(AppContext);

  const handleDelete = () => {

    const confirm = window.confirm("Are you sure to delete this transaction details ?");
    if(!confirm) return;

    const updated = transactions.filter((t) => t.id !== transaction.id);
    setTransactions(updated);
  };

  return (
    <div className="flex justify-between items-center p-3 border rounded shadow-sm">

      <div>
        <p className="text-sm text-gray-500">{transaction.date}</p>
        <p className="font-semibold">{transaction.category}</p>
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

        <p className="text-xs">{transaction.type}</p>

        {role === "admin" && (
          <button
            onClick={handleDelete}
            className="text-red-500 text-xs mt-1"
          >
            Delete
          </button>
        )}
      </div>

    </div>
  );
};

export default TransactionItem;