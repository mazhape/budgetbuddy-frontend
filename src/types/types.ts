// types.ts

export interface Transaction {
  id: string; // Ensure this property exists
  uuid?: string; // Optional, if you want to use it
  description: string;
  amount: number;
  category?: string; // Optional, if applicable
  // Add other properties as needed
}

export interface BudgetData {
  category: string;
  amount: number;
}
export interface Budget {
  category: string;
  amount: number;
}
export interface Goal {
  id: number;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export interface GoalTrackerProps {
  userId: string; // or number depending on the data type
  
}