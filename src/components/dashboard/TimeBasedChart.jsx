import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";

const TimeBasedChart = () => {
  const { transactions } = useContext(AppContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reduce((acc, curr) => {
      const lastBalance = acc.length ? acc[acc.length - 1].balance : 0;

      const newBalance =
        curr.type === "income"
          ? lastBalance + curr.amount
          : lastBalance - curr.amount;

      acc.push({
        date: curr.date,
        balance: newBalance
      });

      return acc;
    }, []);

  return (
    <div className="w-full min-h-[250px] sm:min-h-[300px]">

      {!mounted ? null : chartData.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

    </div>
  );
};

export default TimeBasedChart;