const TransactionFilter = ({
  search,
  setSearch,
  type,
  setType,
  sortBy,
  setSortBy
}) => {
  return (
    
      <div className="flex flex-wrap gap-3">

        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>

      </div>
  );
};

export default TransactionFilter;
