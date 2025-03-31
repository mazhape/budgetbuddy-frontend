import { useState } from "react";
import { setBudget } from "../utils/api";
import BudgetForm from "../components/BudgetForm";
import { BudgetData } from "../types/types";
import Navbar from "@/components/Navbar";

const Budgets = () => {
  const handleBudgetSubmit = async (data: BudgetData) => {
    try {
      console.log("Submitting budget data: ", { userId: "user123", ...data });
      await setBudget({ userId: "user123", ...data });
      console.log("Budget set successfully");
      console.log("Budget set successfully");
    } catch (error) {
      console.error("Error setting budget:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Budgets</h1>
        <BudgetForm onSubmit={handleBudgetSubmit} />
      </div>
    </div>
  );
};

export default Budgets;
