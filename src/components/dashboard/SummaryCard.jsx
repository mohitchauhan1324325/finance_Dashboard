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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Balance */}
      <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:scale-[1.02] transition">
        <p className="text-sm opacity-80">Total Balance</p>
        <h2 className="text-2xl font-bold mt-2">₹{balance}</h2>
      </div>

      {/* Income */}
      <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition">
        <p className="text-sm text-gray-500">Total Income</p>
        <h2 className="text-2xl font-bold text-green-600 mt-2">
          ₹{income}
        </h2>
      </div>

      {/* Expenses */}
      <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition">
        <p className="text-sm text-gray-500">Total Expenses</p>
        <h2 className="text-2xl font-bold text-red-600 mt-2">
          ₹{expenses}
        </h2>
      </div>

    </div>
  );
};

export default SummaryCard;