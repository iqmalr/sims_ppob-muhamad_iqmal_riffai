"use client";

import { setInputNominal } from "@/store/slices/top-up-slice";
import { useDispatch, useSelector } from "react-redux";

type Props = { serviceType?: string };

const PaymentType = ({ serviceType }: Props) => {
  const dispatch = useDispatch();
  const inputNominal = useSelector((state: any) => state.topUp.inputNominal);

  const isInputEmpty = inputNominal.trim() === "";
  const handleBayarClick = () => {
    if (inputNominal.trim() !== "") {
      console.log(JSON.stringify({ nominal: inputNominal }));
    }
  };
  return (
    <>
      <div>
        <h1>PemBayaran</h1>
        <h2>{serviceType}</h2>
      </div>
      <div className="w-full">
        <div className="mb-4 w-full">
          <input
            type="number"
            value={inputNominal}
            onChange={(e) => dispatch(setInputNominal(e.target.value))}
            placeholder="Masukkan nominal"
            className="w-full rounded border p-2"
          />
        </div>
        <button
          className={`w-full rounded p-2 ${
            isInputEmpty
              ? "cursor-not-allowed bg-gray-500"
              : "bg-primary text-white"
          }`}
          disabled={isInputEmpty}
          onClick={handleBayarClick}
        >
          Bayar
        </button>
      </div>
    </>
  );
};

export default PaymentType;
