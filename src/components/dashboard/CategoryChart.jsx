import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";

const CategoryChart = () => {
  const { transactions } = useContext(AppContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = {
          category: curr.category,
          amount: 0
        };
      }
      acc[curr.category].amount += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="w-full h-[300px]">
      {categoryData.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
              }}
            />
            <Bar dataKey="amount" fill="#10b981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CategoryChart;
