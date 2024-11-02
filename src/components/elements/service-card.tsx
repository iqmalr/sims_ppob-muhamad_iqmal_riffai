"use client";
import { Service } from "@/data/services";
import Image from "next/image";
import { useRouter } from "next/navigation";
type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/payment/${service.service_code.toLowerCase()}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-start max-w-14 px-2 text-center bg-transparent border hover:border-red-600"
    >
      <Image
        src={service.service_icon}
        alt={service.service_code}
        width={48}
        height={48}
      />
      <p className="mt-2 text-sm">{service.service_name}</p>
    </div>
  );
};

export default ServiceCard;
