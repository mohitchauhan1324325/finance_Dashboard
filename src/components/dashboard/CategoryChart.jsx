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
import { useContext } from "react";

const CategoryChart = () => {
  const { transactions } = useContext(AppContext);

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
      <ResponsiveContainer width="100%" height="100%">
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
          <Bar
            dataKey="amount"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;