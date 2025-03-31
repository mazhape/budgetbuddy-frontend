import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import TransactionList from "../components/TransactionList";
import { fetchTransactions } from "../utils/api";
import { useEffect, useState } from "react";
import { Transaction } from "../types/types";
import MonthlySpendingChart from "@/components/MonthlySpendingChart";
import CashFlowAnalysis from "@/components/CashFlowAnalysis";
import SpendingAlerts from "@/components/SpendingAlerts";
import SavingsRateDisplay from "@/components/SavingsRateDisplay";
import TopSpendingCategoriesChart from "@/components/TopSpendingCategoriesChart";
import InvestmentInsights from "@/components/InvestmentInsights";
import BudgetTracker from "@/components/BudgetTracker";
import FinancialHealthScore from "@/components/FinancialHealthScore";
import DebtManagement from "@/components/DebtManagement";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const accountId = "3353431574710166878182963"; // Replace with the actual account ID
  const userId = "123"; // Replace with the actual user ID

  useEffect(() => {
    const loadTransactions = async () => {
      console.log("Starting to load transactions...");
      try {
        const data = await fetchTransactions(accountId);
        console.log("Account ID:", accountId);
        console.log("Fetched data:", data);

        if (data.transactions) {
          console.log("Setting transactions in state...");
          setTransactions(data.transactions);
        } else {
          console.log("No transactions found, resetting state...");
          setTransactions([]);
        }
      } catch (error) {
        console.error("Error loading transactions:", error);
      }
    };
    loadTransactions();
  }, [accountId]);

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
          {/* Monthly Spending Breakdown */}
          <div className="mb-8">
            <MonthlySpendingChart accountId={accountId} />
          </div>
          {/* Top Spending Categories */}
          <div className="mb-8">
            <TopSpendingCategoriesChart accountId={accountId} />
          </div>

          {/* Savings Rate */}
          <div className="mb-8">
            <SavingsRateDisplay accountId={accountId} />
          </div>

          {/* Spending Alerts */}
          <div className="mb-8">
            <SpendingAlerts accountId={accountId} />
          </div>

          {/* Cash Flow Analysis */}
          <div className="mb-8">
            <CashFlowAnalysis accountId={accountId} />
          </div>
          {/* Financial Health Score */}
          <div className="mb-8">
            <FinancialHealthScore accountId={accountId} />
          </div>

          {/* Customizable Budgets*/}
          <div className="mb-8">
            <BudgetTracker userId={userId} />
          </div>

          {/* Investment Insights */}
          <div className="mb-8">
            <InvestmentInsights accountId={accountId} />
          </div>

          {/* Debt Management */}
          <div className="mb-8">
            <DebtManagement accountId={accountId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
