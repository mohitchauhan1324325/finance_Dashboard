import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/transactions/TransactionList";
import AddTransaction from "../components/transactions/AddTransaction";
import TransactionFilter from "../components/transactions/TransactionFilter";

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

      <TransactionFilter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

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