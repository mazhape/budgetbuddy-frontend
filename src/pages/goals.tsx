import { useState, FormEvent, ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import GoalTracker from "@/components/GoalTracker";
import GoalForm from "@/components/GoalForm";

// Goals.tsx
const Goals = () => {
  const userId = "3353431574710166878182963"; // Replace with actual user ID

  return (
    <div className="container mx-auto p-4">
      <GoalTracker userId={userId.toString()} />{" "}
      {/* Convert number to string */}
      <GoalForm />
    </div>
  );
};

export default Goals;
