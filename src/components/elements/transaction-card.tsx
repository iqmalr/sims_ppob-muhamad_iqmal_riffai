import { Transaction } from "@/data/transaction";

type TransactionProps = {
  transaction: Transaction;
};
const TransactionCard = ({ transaction }: TransactionProps) => {
  const isPositive = transaction.amount >= 0;
  const formattedAmount = `${isPositive ? "+ " : "- "}Rp. ${Math.abs(transaction.amount).toLocaleString()}`;

  return (
    <div className="flex w-full flex-row items-center justify-between border p-4">
      <div className="flex flex-col">
        <p
          className={`text-xl font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {formattedAmount}
        </p>
        <p>{new Date(transaction.createdAt).toLocaleDateString()}</p>
      </div>
      <h1 className="font-bold text-gray-600">{transaction.title}</h1>
    </div>
  );
};

export default TransactionCard;
