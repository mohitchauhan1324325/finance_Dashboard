import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(AppContext);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type
    };

    addTransaction (newTransaction);

    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;