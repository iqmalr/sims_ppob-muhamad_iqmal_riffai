import services from "@/data/services";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      {services.map((service) => (
        <ServiceCard key={service.service_code} service={service} />
      ))}
    </div>
  );
};

export default Services;
