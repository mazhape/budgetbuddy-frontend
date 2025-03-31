import React, { useEffect, useState } from "react";
import axios from "axios";

// Define props interface
interface SpendingAlertsProps {
  accountId: string;
}

interface Alerts {
  [category: string]: string; // The category is a string, and the message is also a string
}

const SpendingAlerts: React.FC<SpendingAlertsProps> = ({ accountId }) => {
  const [alerts, setAlerts] = useState<Alerts>({});

  useEffect(() => {
    const budgetLimits = {
      Groceries: 500,
      Entertainment: 200,
      Utilities: 300,
    };

    axios
      .get<Alerts>("/api/spending-alerts", {
        params: { accountId, ...budgetLimits },
      })
      .then((response) => setAlerts(response.data))
      .catch((error) =>
        console.error("Error fetching spending alerts:", error)
      );
  }, [accountId]);

  return (
    <div>
      <h2>Spending Alerts</h2>
      {Object.keys(alerts).length > 0 ? (
        <ul>
          {Object.entries(alerts).map(([category, message]) => (
            <li key={category}>{message}</li>
          ))}
        </ul>
      ) : (
        <p>No spending alerts.</p>
      )}
    </div>
  );
};

export default SpendingAlerts;
