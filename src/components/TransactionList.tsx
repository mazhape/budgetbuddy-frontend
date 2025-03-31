import { Transaction } from "../types/types";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => {
  console.log("Fetched transactions:", transactions);
  if (transactions.length === 0) {
    return <p>No transactions found for this account.</p>;
  }

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.uuid ?? transaction.id}>
          {" "}
          {/* Use `id` or another valid property */}
          {transaction.description} - {transaction.amount}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
