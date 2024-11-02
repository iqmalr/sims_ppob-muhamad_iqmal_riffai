import { transaction } from "@/data/transaction";
import { useState } from "react";
import TransactionCard from "../elements/transaction-card";

const TransactionPage = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const showMore = () => {
    setVisibleItems((prev) => prev + 5);
  };

  const visibleTransactions = transaction.slice(0, visibleItems);
  const hasMore = visibleItems < transaction.length;

  return (
    <>
      <h1 className="mb-10">semua transaksi</h1>
      <div className="flex flex-col gap-4">
        {visibleTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={showMore}
          className="mt-4 w-full rounded bg-gray-400 px-4 py-2 text-primary hover:bg-primary hover:text-white"
        >
          Tampilkan Lebih Banyak
        </button>
      )}
    </>
  );
};

export default TransactionPage;
