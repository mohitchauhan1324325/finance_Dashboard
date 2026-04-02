import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const TimeBasedChart = () => {

  const data = [
    { date: "Jan", balance: 4000 },
    { date: "Feb", balance: 3000 },
    { date: "Mar", balance: 2500 },
    { date: "Apr", balance: 2000 },
  ];

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
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