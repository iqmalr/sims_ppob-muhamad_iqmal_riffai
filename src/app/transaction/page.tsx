"use client";
import Hero from "@/components/elements/hero";
import TransactionPage from "@/components/pages/transaction-page";

type Props = {};

const Transaction = (props: Props) => {
  return (
    <>
      <Hero />
      <TransactionPage />
    </>
  );
};

export default Transaction;
