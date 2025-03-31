import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the type for the props
interface FinancialHealthScoreProps {
  accountId: string;
}

const FinancialHealthScore: React.FC<FinancialHealthScoreProps> = ({
  accountId,
}) => {
  // State type is number for the score
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    axios
      .get<number>("/api/financial-health", { params: { accountId } })
      .then((response) => setScore(response.data))
      .catch((error) =>
        console.error("Error fetching financial health score:", error)
      );
  }, [accountId]);

  return (
    <div>
      <h2>Financial Health Score</h2>
      <p>Your financial health score is: {score}/100</p>
    </div>
  );
};

export default FinancialHealthScore;
