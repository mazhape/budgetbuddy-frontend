import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the type for the response data (adjust according to actual API response structure)
interface DebtRepaymentPlan {
  plan: string; // Modify this based on actual structure of the response
}

interface DebtManagementProps {
  accountId: string;
}

const DebtManagement: React.FC<DebtManagementProps> = ({ accountId }) => {
  const [repaymentPlan, setRepaymentPlan] = useState<string>("");

  useEffect(() => {
    axios
      .get<DebtRepaymentPlan>("/api/debt", { params: { accountId } })
      .then((response) => setRepaymentPlan(response.data.plan))
      .catch((error) =>
        console.error("Error fetching debt repayment plan:", error)
      );
  }, [accountId]);

  return (
    <div>
      <h2>Debt Management</h2>
      <p>{repaymentPlan}</p>
    </div>
  );
};

export default DebtManagement;
