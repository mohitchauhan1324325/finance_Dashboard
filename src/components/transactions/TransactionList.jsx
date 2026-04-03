import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions }) => {
  return (
    <div className="space-y-2">
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </div>
  );
};

export default TransactionList;