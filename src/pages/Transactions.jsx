import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/transactions/TransactionList";
import AddTransaction from "../components/transactions/AddTransaction";
import TransactionFilter from "../components/transactions/TransactionFilter";

const Transactions = () => {
  const { transactions, role } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const filtered = transactions.filter((t) => {
    const matchSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType = type ? t.type === type : true;

    return matchSearch && matchType;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount;
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const exportJSON = () => {
    const dataStr = JSON.stringify(sorted, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
  };

  const exportCSV = () => {
    const headers = ["Date", "Category", "Type", "Amount"];

    const rows = sorted.map((t) => [
      t.date,
      t.category,
      t.type,
      t.amount,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">

      <div className="max-w-6xl mx-auto space-y-6 text-gray-900 dark:text-white">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

          <h1 className="text-3xl font-semibold">Transactions</h1>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={exportJSON}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Export JSON
            </button>

            <button
              onClick={exportCSV}
              className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Export CSV
            </button>
          </div>

        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
          <TransactionFilter
            search={search}
            setSearch={setSearch}
            type={type}
            setType={setType}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {role === "admin" && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
            <AddTransaction />
          </div>
        )}

        {sorted.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center text-gray-500 dark:text-gray-300">
            No transactions found
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
            <TransactionList transactions={sorted} />
          </div>
        )}

      </div>
    </div>
  );
};

export default Transactions;