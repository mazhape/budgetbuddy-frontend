import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Define the data type
interface DataPoint {
  name: string;
  income: number;
  expenses: number;
}

const data: DataPoint[] = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
];

const Chart: React.FC = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#8884d8" />
      <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
