// types.ts

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export interface BudgetData {
  category: string;
  amount: number;
}
export interface Budget {
  category: string;
  amount: number;
}