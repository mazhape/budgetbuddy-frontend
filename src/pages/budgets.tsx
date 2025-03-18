import { useState } from "react";
import { setBudget } from "../utils/api";
import BudgetForm from "../components/BudgetForm";
import { BudgetData } from "../types/types";

const Budgets = () => {
  const handleBudgetSubmit = async (data: BudgetData) => {
    try {
      await setBudget({ userId: "user123", ...data });
      console.log("Budget set successfully");
    } catch (error) {
      console.error("Error setting budget:", error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Budgets</h1>
        <BudgetForm onSubmit={handleBudgetSubmit} />
      </div>
    </div>
  );
};

export default Budgets;
