import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the type for the props
interface BudgetTrackerProps {
  userId: string;
}

// Define the type for the budget data
interface Budgets {
  [category: string]: number;
}

const BudgetTracker: React.FC<BudgetTrackerProps> = ({ userId }) => {
  // State type is an object with category names as keys and budget limits as values
  const [budgets, setBudgets] = useState<Budgets>({});

  useEffect(() => {
    axios
      .get<Budgets>("/api/budgets", { params: { userId } })
      .then((response) => setBudgets(response.data))
      .catch((error) => console.error("Error fetching budgets:", error));
  }, [userId]);

  return (
    <div>
      <h2>Customizable Budgets</h2>
      {Object.keys(budgets).length > 0 ? (
        <ul>
          {Object.entries(budgets).map(([category, limit]) => (
            <li key={category}>
              {category}: ${limit}
            </li>
          ))}
        </ul>
      ) : (
        <p>No budgets set.</p>
      )}
    </div>
  );
};

export default BudgetTracker;
