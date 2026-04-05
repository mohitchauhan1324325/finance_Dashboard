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
import { useContext } from "react";

const TimeBasedChart = () => {
  const { transactions } = useContext(AppContext);

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
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
            }}
          />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeBasedChart;