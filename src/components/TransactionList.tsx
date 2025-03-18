import { Transaction } from "../types/types";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="space-y-2">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="p-4 border rounded-lg">
          <p>{transaction.description}</p>
          <p className="text-gray-600">Amount: {transaction.amount}</p>
          <p className="text-gray-600">Category: {transaction.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
