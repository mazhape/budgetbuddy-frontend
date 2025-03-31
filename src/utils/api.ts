import { Transaction } from '@/types/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend URL
});

export const fetchTransactions = async (accountId: string) => {
  try {
      const response = await api.get(`/transactions/${accountId}`);
      
      // If status is 200 but empty array, handle it
      if (response.status === 200 && response.data.length === 0) {
          console.warn("No transactions found.");
          return { transactions: [], message: "No transactions found" };
      }
      
      return { transactions: response.data };
  } catch (error: any) {
      console.error("Error fetching transactions:", error.response?.data || error.message);
      
      return {
          transactions: [],
          error: error.response?.data?.error || "Failed to fetch transactions",
      };
  }
};

export const fetchAccountBalance = async () => {
  const response = await api.get('/balance');
  return response.data;
};

export const setBudget = async (budget: { userId: string; category: string; amount: number }) => {
  const response = await api.post(`/budgets/update/${budget.userId}`, budget);
  return response.data;
};


export const getAlerts = async (userId: string) => {
  const response = await api.get(`/alerts/${userId}`);
  return response.data;
};

export const fetchGoals = async (userId: string) => {
  const response = await axios.get('/api/goals', { params: { userId } });
  return response.data;
};
