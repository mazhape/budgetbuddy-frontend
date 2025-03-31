import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface SpendingTrendsChartProps {
  spendingByCategory: Record<string, number>; // Object where keys are category names and values are numbers
}

const SpendingTrendsChart: React.FC<SpendingTrendsChartProps> = ({
  spendingByCategory,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
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
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => chartInstance.destroy(); // Cleanup to prevent duplicate charts
  }, [spendingByCategory]);

  return <canvas ref={chartRef} />;
};

export default SpendingTrendsChart;
