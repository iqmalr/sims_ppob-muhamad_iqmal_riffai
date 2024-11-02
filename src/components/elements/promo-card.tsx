import { Promo } from "@/data/promos";
import Image from "next/image";

type PromoCardProps = {
  promo: Promo;
};

const PromoCard = ({ promo }: PromoCardProps) => {
  return (
    <div>
      <Image src={promo.image} alt={promo.title} width={400} height={100} />
      <p>{promo.description}</p>
    </div>
  );
};

export default PromoCard;
