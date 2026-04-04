import { createContext, useEffect, useState } from "react";
import { transactionsData } from "../data/dummyData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    
    if(stored){
        return JSON.parse(stored);
    }

    return transactionsData
  });

  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: ""
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filters,
        setFilters,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};