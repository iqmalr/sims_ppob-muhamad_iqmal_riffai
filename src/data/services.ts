import Game from "@/assets/Website Assets/Website Assets/Game.png";
import Kurban from "@/assets/Website Assets/Website Assets/Kurban.png";
import Listrik from "@/assets/Website Assets/Website Assets/Listrik.png";
import Musik from "@/assets/Website Assets/Website Assets/Musik.png";
import PaketData from "@/assets/Website Assets/Website Assets/Paket Data.png";
import PBB from "@/assets/Website Assets/Website Assets/PBB.png";
import PDAM from "@/assets/Website Assets/Website Assets/PDAM.png";
import PGN from "@/assets/Website Assets/Website Assets/PGN.png";
import Pulsa from "@/assets/Website Assets/Website Assets/Pulsa.png";
import Televisi from "@/assets/Website Assets/Website Assets/Televisi.png";
import VoucherMakanan from "@/assets/Website Assets/Website Assets/Voucher Makanan.png";
import Zakat from "@/assets/Website Assets/Website Assets/Zakat.png";
import { StaticImageData } from "next/image";
export type Service = {
  service_code: string;
  service_name: string;
  service_icon: StaticImageData;
};

const services: Service[] = [
  { service_code: "PBB", service_name: "PBB", service_icon: PBB },
  { service_code: "LISTRIK", service_name: "Listrik", service_icon: Listrik },
  { service_code: "PULSA", service_name: "Pulsa", service_icon: Pulsa },
  { service_code: "PDAM", service_name: "PDAM", service_icon: PDAM },
  { service_code: "PGN", service_name: "PGN", service_icon: PGN },
  { service_code: "TV", service_name: "TV", service_icon: Televisi },
  { service_code: "MUSIK", service_name: "Musik", service_icon: Musik },
  {
    service_code: "VOUCHER GAME",
    service_name: "Voucher Game",
    service_icon: Game,
  },
  {
    service_code: "VOUCHER MAKANAN",
    service_name: "Voucher Makanan",
    service_icon: VoucherMakanan,
  },
  { service_code: "KURBAN", service_name: "Kurban", service_icon: Kurban },
  { service_code: "ZAKAT", service_name: "Zakat", service_icon: Zakat },
  {
    service_code: "PAKET DATA",
    service_name: "Paket Data",
    service_icon: PaketData,
  },
];

export default services;
