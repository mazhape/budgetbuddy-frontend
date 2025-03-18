import { useState } from "react";
import { BudgetData } from "../types/types";

interface BudgetFormProps {
  onSubmit: (data: BudgetData) => void;
}

const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ category, amount: parseFloat(amount) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Set Budget
      </button>
    </form>
  );
};

export default BudgetForm;
