import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

// Define props interface
interface TopSpendingCategoriesChartProps {
  accountId: string;
}

const TopSpendingCategoriesChart: React.FC<TopSpendingCategoriesChartProps> = ({
  accountId,
}) => {
  // Define state with correct type
  const [topSpendingCategories, setTopSpendingCategories] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    axios
      .get("/api/top-spending-categories", { params: { accountId } })
      .then((response) => setTopSpendingCategories(response.data))
      .catch((error) =>
        console.error("Error fetching top spending categories:", error)
      );
  }, [accountId]);

  const data = {
    labels: Object.keys(topSpendingCategories),
    datasets: [
      {
        data: Object.values(topSpendingCategories),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Top Spending Categories</h2>
      <Pie data={data} />
    </div>
  );
};

export default TopSpendingCategoriesChart;
