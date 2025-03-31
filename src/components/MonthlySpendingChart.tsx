import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlySpendingChartProps {
  accountId: string;
}

const MonthlySpendingChart: React.FC<MonthlySpendingChartProps> = ({
  accountId,
}) => {
  const [monthlySpending, setMonthlySpending] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    axios
      .get("/api/monthly-spending", { params: { accountId } })
      .then((response) => setMonthlySpending(response.data))
      .catch((error) =>
        console.error("Error fetching monthly spending:", error)
      );
  }, [accountId]);

  const data = {
    labels: Object.keys(monthlySpending),
    datasets: [
      {
        label: "Monthly Spending",
        data: Object.values(monthlySpending),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Spending",
      },
    },
  };

  return (
    <div>
      <h2>Monthly Spending</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlySpendingChart;
