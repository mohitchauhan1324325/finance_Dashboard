import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl overflow-hidden">
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </div>
  );
};

export default TransactionList;