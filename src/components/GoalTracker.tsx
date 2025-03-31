import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoalTrackerProps } from "@/types/types";

interface Goal {
  id: number;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string; // Dates are typically strings when coming from an API
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ userId }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const fetchGoals = async () => {
      // try {
      //   // const response = await axios.get("/api/goals", {
      //   //   params: { userId },
      //   // });
      //   setGoals(response.data);
      // } catch (error) {
      //   console.error("Error fetching goals:", error);
      // }
    };

    fetchGoals();
  }, [userId]);
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.id} className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600">
            {goal.description}
          </h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Target:</span> $
              {goal.targetAmount.toLocaleString()}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Current:</span> $
              {goal.currentAmount.toLocaleString()}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Deadline:</span>{" "}
              {new Date(goal.deadline).toLocaleDateString()}
            </p>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{
                  width: `${(goal.currentAmount / goal.targetAmount) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {((goal.currentAmount / goal.targetAmount) * 100).toFixed(2)}%
              completed
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalTracker;
