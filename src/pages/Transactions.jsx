import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/transactions/TransactionList";
import AddTransaction from "../components/transactions/AddTransaction";
import TransactionFilter from "../components/transactions/TransactionFilter";

const Transactions = () => {
  const { transactions, role, loading } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("date");

  if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full"></div>
    </div>
  );
}

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">

      <div className="max-w-6xl mx-auto space-y-6 text-gray-900 dark:text-white">

        <h1 className="text-3xl font-semibold">Transactions</h1>

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