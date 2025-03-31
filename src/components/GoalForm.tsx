import { useState, FormEvent, ChangeEvent } from "react";
import Navbar from "../components/Navbar";

const GoalForm = () => {
  const [type, setType] = useState<string>("savings");
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [deadline, setDeadline] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, targetAmount, deadline, description }),
    });
    if (response.ok) {
      alert("Goal created successfully!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Goals</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Goal Type
            </label>
            <select
              value={type}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setType(e.target.value)
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="savings">Savings</option>
              <option value="debt">Debt Repayment</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Amount
            </label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTargetAmount(Number(e.target.value))
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDeadline(e.target.value)
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Goal
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalForm;
