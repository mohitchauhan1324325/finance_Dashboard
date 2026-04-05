import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
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
    <div className="flex justify-center items-center">
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default TimeBasedChart;