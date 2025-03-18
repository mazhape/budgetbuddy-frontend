import { Transaction } from '@/types/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend URL
});

export const fetchTransactions = async (accountId: string): Promise<Transaction[]> => {
  const response = await api.get(`/transactions/${accountId}`);
  return response.data;
};
export const fetchAccountBalance = async () => {
  const response = await api.get('/balance');
  return response.data;
};

export const setBudget = async (budget: { userId: string; category: string; amount: number }) => {
  const response = await api.post('/budget', budget);
  return response.data;
};

export const getAlerts = async (userId: string) => {
  const response = await api.get(`/alerts/${userId}`);
  return response.data;
};