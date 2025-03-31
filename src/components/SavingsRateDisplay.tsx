import React, { useEffect, useState } from "react";
import axios from "axios";

// Define props interface
interface SavingsRateDisplayProps {
  accountId: string;
}

const SavingsRateDisplay: React.FC<SavingsRateDisplayProps> = ({
  accountId,
}) => {
  const [savingsRate, setSavingsRate] = useState<number>(0);

  useEffect(() => {
    axios
      .get<number>("/api/savings-rate", { params: { accountId } })
      .then((response) => setSavingsRate(response.data))
      .catch((error) => console.error("Error fetching savings rate:", error));
  }, [accountId]);

  return (
    <div>
      <h2>Savings Rate</h2>
      <p>Your current savings rate is: {savingsRate}%</p>
    </div>
  );
};

export default SavingsRateDisplay;
