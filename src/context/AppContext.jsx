import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const API_URL = "http://localhost:3001/transactions";

export const AppProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(API_URL);
        setTransactions(res.data);
      } catch (error) {
        console.log("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(API_URL, newTransaction);
      setTransactions((prev) => [...prev, res.data]);
    } catch (error) {
      console.log("Error adding:", error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTransactions((prev) =>
        prev.filter((t) => t.id !== id)
      );
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        loading,
        role,
        setRole,
        filters,
        setFilters,
        darkMode,
        setDarkMode,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </AppContext.Provider>
  );
};