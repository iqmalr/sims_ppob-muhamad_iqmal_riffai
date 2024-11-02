"use client";

import { setInputNominal } from "@/store/slices/top-up-slice";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const TopUpItems = (props: Props) => {
  const dispatch = useDispatch();
  const inputNominal = useSelector((state: any) => state.topUp.inputNominal);

  const handleNominalClick = (nominal: string) => {
    dispatch(setInputNominal(nominal));
  };

  const handleBayarClick = () => {
    if (inputNominal.trim() !== "") {
      console.log(JSON.stringify({ nominal: inputNominal }));
    }
  };
  const isInputEmpty = inputNominal.trim() === "";
  return (
    <>
      <div>
        <h1>Silahkan Masukkan</h1>
        <h2>Nominal Top Up</h2>
      </div>
      <div className="flex flex-row space-x-6">
        <div className="w-3/4">
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
            {isInputEmpty ? "Top Up" : "Bayar"}
          </button>
        </div>
        <div className="grid w-1/4 grid-cols-3 gap-4">
          {["10.000", "20.000", "50.000", "100.000", "250.000", "500.000"].map(
            (nominal) => (
              <button
                key={nominal}
                className="cursor-pointer rounded bg-gray-200 p-2 text-center"
                onClick={() => handleNominalClick(nominal)}
              >
                {nominal}
              </button>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default TopUpItems;
