import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import img from "../../assets/financeApp.jpg";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img
            src={img}
            className="h-6 object-contain dark:bg-white rounded"
            alt="logo"
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Finance Dashboard
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="/" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="/transaction" className="hover:text-blue-600 transition">Transactions</a>
          <a href="/insights" className="hover:text-blue-600 transition">Insights</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
        >
          <a href="/" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="/transaction" className="hover:text-blue-600 transition">Transactions</a>
          <a href="/insights" className="hover:text-blue-600 transition">Insights</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;