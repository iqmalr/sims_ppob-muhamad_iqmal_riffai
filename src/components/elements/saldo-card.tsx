import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import {
  selectSaldoVisibility,
  toggleSaldoVisibility,
} from "@/store/slices/saldo-slice";

type Props = {};

const SaldoCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectSaldoVisibility);

  const handleToggleVisibility = () => {
    dispatch(toggleSaldoVisibility());
  };
  return (
    <>
      <section
        className="bg flex h-[200px] w-3/5 flex-col justify-between rounded-lg bg-primary px-4 py-9 text-white"
        aria-label="Saldo Anda"
      >
        <header className="text-xl font-semibold">Saldo Anda</header>
        <p className="text-2xl">Rp {isVisible ? "100.000" : "*****"}</p>

        <footer>
          <button
            onClick={handleToggleVisibility}
            className="rounded-xl border px-2 py-1 text-sm"
            aria-pressed={isVisible}
          >
            {isVisible ? "Sembunyikan Saldo" : "Lihat Saldo"}
          </button>
        </footer>
      </section>
    </>
  );
};

export default SaldoCard;
