import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
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
    <div className="flex justify-center items-center">
      <BarChart width={500} height={300} data={categoryData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="category" className="text-xs"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CategoryChart;