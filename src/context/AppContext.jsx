import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { transactionsData } from "../data/dummyData";

export const AppContext = createContext();

const useAPI = import.meta.env.VITE_USE_API === "true";
const API_URL = import.meta.env.VITE_API_URL;

export const AppProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (useAPI) {
          const res = await axios.get(API_URL);
          setTransactions(res.data);
        } else {
          const stored = localStorage.getItem("transactions");
          setTransactions(stored ? JSON.parse(stored) : transactionsData);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const addTransaction = async (newTransaction) => {
    try {
      if (useAPI) {
        const res = await axios.post(API_URL, newTransaction);
        setTransactions((prev) => [...prev, res.data]);
      } else {
        const updated = [...transactions, { ...newTransaction, id: Date.now() }];
        setTransactions(updated);
        localStorage.setItem("transactions", JSON.stringify(updated));
      }
    } catch (error) {
      console.error("Error adding:", error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      if (useAPI) {
        await axios.delete(`${API_URL}/${id}`);
        setTransactions((prev) => prev.filter((t) => t.id !== id));
      } else {
        const updated = transactions.filter((t) => t.id !== id);
        setTransactions(updated);
        localStorage.setItem("transactions", JSON.stringify(updated));
      }
    } catch (error) {
      console.error("Error deleting:", error);
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