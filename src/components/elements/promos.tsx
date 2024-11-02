import promos from "@/data/promos";
import PromoCard from "./promo-card";

type Props = {};

const Promos = (props: Props) => {
  return (
    <div>
      <div>Temukan Promo Menarik</div>
      <div className="flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar ">
        {promos.map((promo) => (
          <div key={promo.id} className="flex-shrink-0  inline-block mr-2 ">
            <PromoCard promo={promo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promos;
