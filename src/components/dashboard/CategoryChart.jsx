import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const CategoryChart = () => {

    const data = [
        { category: "Food", amount: 400 },
        { category: "Rent", amount: 1200 },
        { category: "Travel", amount: 300 },
        { category: "Shopping", amount: 500 },
    ];

    return (
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
    );
};

export default CategoryChart;