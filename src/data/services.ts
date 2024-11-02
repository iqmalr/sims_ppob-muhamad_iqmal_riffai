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
  { service_code: "PBB", service_name: "pbb", service_icon: PBB },
  { service_code: "Listrik", service_name: "listrik", service_icon: Listrik },
  { service_code: "Pulsa", service_name: "pulsa", service_icon: Pulsa },
  { service_code: "PDAM", service_name: "pdam", service_icon: PDAM },
  { service_code: "PGN", service_name: "pgn", service_icon: PGN },
  { service_code: "TV", service_name: "tv", service_icon: Televisi },
  { service_code: "Musik", service_name: "musik", service_icon: Musik },
  {
    service_code: "Voucher Game",
    service_name: "voucher-game",
    service_icon: Game,
  },
  {
    service_code: "Voucher Makanan",
    service_name: "voucher-makanan",
    service_icon: VoucherMakanan,
  },
  { service_code: "Kurban", service_name: "kurban", service_icon: Kurban },
  { service_code: "Zakat", service_name: "zakat", service_icon: Zakat },
  {
    service_code: "Paket Data",
    service_name: "paket-data",
    service_icon: PaketData,
  },
];

export default services;
