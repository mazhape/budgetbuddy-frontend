import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define props type
interface SpendingTrendsProps {
  accountId: string;
}

const SpendingTrends: React.FC<SpendingTrendsProps> = ({ accountId }) => {
  const [spendingByCategory, setSpendingByCategory] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    axios
      .get("/api/budget/spending", { params: { accountId } })
      .then((response) => setSpendingByCategory(response.data))
      .catch((error) => console.error("Error fetching spending data:", error));
  }, [accountId]);

  const data = {
    labels: Object.keys(spendingByCategory),
    datasets: [
      {
        label: "Spending by Category",
        data: Object.values(spendingByCategory),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Spending Trends</h2>
      <Bar data={data} />
    </div>
  );
};

export default SpendingTrends;
