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

interface CashFlowAnalysisProps {
  accountId: string;
}

interface CashFlowData {
  [month: string]: Map<string, number>;
}

const CashFlowAnalysis: React.FC<CashFlowAnalysisProps> = ({ accountId }) => {
  const [cashFlow, setCashFlow] = useState<CashFlowData>({});

  useEffect(() => {
    axios
      .get<CashFlowData>("/api/cash-flow", { params: { accountId } })
      .then((response) => setCashFlow(response.data))
      .catch((error) => console.error("Error fetching cash flow:", error));
  }, [accountId]);

  const data = {
    labels: Object.keys(cashFlow),
    datasets: [
      {
        label: "Income",
        data: Object.values(cashFlow).map((month) => month.get("Income") || 0),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: Object.values(cashFlow).map((month) => month.get("Expense") || 0),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
        text: "Cash Flow Analysis",
      },
    },
  };

  return (
    <div>
      <h2>Cash Flow Analysis</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CashFlowAnalysis;
