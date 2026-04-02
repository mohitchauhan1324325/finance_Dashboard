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
        <div className="flex justify-center items-center">
            <BarChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default CategoryChart;