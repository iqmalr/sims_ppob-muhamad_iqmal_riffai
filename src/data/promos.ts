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
    image: require("@/assets/Website Assets/Website Assets/Banner 1.png"),
  },
  {
    id: 2,
    title: "Promo 2",
    description: "Promo 2 Description",
    image: require("@/assets/Website Assets/Website Assets/Banner 2.png"),
  },
  {
    id: 3,
    title: "Promo 3",
    description: "Promo 3 Description",
    image: require("@/assets/Website Assets/Website Assets/Banner 3.png"),
  },
  {
    id: 4,
    title: "Promo 4",
    description: "Promo 4 Description",
    image: require("@/assets/Website Assets/Website Assets/Banner 4.png"),
  },
  {
    id: 5,
    title: "Promo 5",
    description: "Promo 5 Description",
    image: require("@/assets/Website Assets/Website Assets/Banner 5.png"),
  },
];

export default promos;
