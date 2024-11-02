import Banner1 from "@/assets/Website Assets/Website Assets/Banner 1.png";
import Banner2 from "@/assets/Website Assets/Website Assets/Banner 2.png";
import Banner3 from "@/assets/Website Assets/Website Assets/Banner 3.png";
import Banner4 from "@/assets/Website Assets/Website Assets/Banner 4.png";
import Banner5 from "@/assets/Website Assets/Website Assets/Banner 5.png";
import { StaticImageData } from "next/image";

export interface Promo {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const promos: Promo[] = [
  {
    id: 1,
    title: "Promo 1",
    description: "Promo 1 Description",
    image: Banner1,
  },
  {
    id: 2,
    title: "Promo 2",
    description: "Promo 2 Description",
    image: Banner2,
  },
  {
    id: 3,
    title: "Promo 3",
    description: "Promo 3 Description",
    image: Banner3,
  },
  {
    id: 4,
    title: "Promo 4",
    description: "Promo 4 Description",
    image: Banner4,
  },
  {
    id: 5,
    title: "Promo 5",
    description: "Promo 5 Description",
    image: Banner5,
  },
];

export default promos;
