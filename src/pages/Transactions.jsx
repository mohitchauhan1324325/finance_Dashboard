import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/transactions/TransactionList";
import AddTransaction from "../components/transactions/AddTransaction";

const Transactions = () => {
  const { transactions, role } = useContext(AppContext);

  // UI state
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("date");

  //Filtering
  const filtered = transactions.filter((t) => {
    const matchSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType = type ? t.type === type : true;

    return matchSearch && matchType;
  });

  //Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount;
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div className="p-4 space-y-4">

      {/* Title */}
      <h1 className="text-2xl font-bold">Transactions</h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-3">

        {/* Search */}
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter */}
        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Sort */}
        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>

      </div>

      {/* Admin Only Form */}
      {role === "admin" && (
        <AddTransaction />
      )}

      {/* Empty State */}
      {sorted.length === 0 ? (
        <p className="text-gray-500">No transactions found</p>
      ) : (
        <TransactionList transactions={sorted} />
      )}

    </div>
  );
};

export default Transactions;