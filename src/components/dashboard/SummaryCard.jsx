import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SummaryCard = () => {
  const { transactions } = useContext(AppContext);

  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expenses += t.amount;
    }
  });

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="p-4 rounded shadow bg-white dark:bg-gray-800">
        <p className="text-gray-500">Total Balance</p>
        <h2 className="text-xl font-bold text-black dark:text-white">
          ₹{balance}
        </h2>
      </div>


      <div className="p-4 rounded shadow bg-green-100 dark:bg-green-900">
        <p>Total Income</p>
        <h2 className="text-xl font-bold text-green-600">
          ₹{income}
        </h2>
      </div>

      <div className="p-4 rounded shadow bg-red-100 dark:bg-red-900">
        <p>Total Expenses</p>
        <h2 className="text-xl font-bold text-red-600">
          ₹{expenses}
        </h2>
      </div>

    </div>
  );
};

export default SummaryCard;