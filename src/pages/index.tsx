import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import TransactionList from "../components/TransactionList";
import { fetchTransactions } from "../utils/api";
import { useEffect, useState } from "react";
import { Transaction } from "../types/types";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const accountId = "user123"; // Replace with the actual account ID

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions(accountId); // Pass accountId here
      setTransactions(data);
    };
    loadTransactions();
  }, [accountId]); // Add accountId to the dependency array

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Spending Trends</h2>
            <Chart />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
