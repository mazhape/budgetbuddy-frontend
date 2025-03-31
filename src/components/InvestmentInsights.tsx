import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

// Import the necessary components and register them
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Necessary for Pie charts
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the components globally
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const InvestmentInsights = ({ accountId }: { accountId: string }) => {
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    axios
      .get("/api/investment", { params: { accountId } })
      .then((response) => setSuggestion(response.data))
      .catch((error) =>
        console.error("Error fetching investment suggestion:", error)
      );
  }, [accountId]);

  return (
    <div>
      <h2>Investment Insights</h2>
      <p>{suggestion}</p>
    </div>
  );
};

export default InvestmentInsights;
