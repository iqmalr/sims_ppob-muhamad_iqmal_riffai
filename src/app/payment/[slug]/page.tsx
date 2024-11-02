import PaymentPage from "@/components/pages/payment-page";
import services from "@/data/services";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Payment({ params }: Props) {
  const { slug } = params;

  if (!slug || slug.length === 0) {
    return null;
  }

  const serviceType = slug.toLowerCase();
  const service = services.find(
    (s) => s.service_name.toLowerCase() === serviceType
  );
  if (!service) {
    return <p>Service not found</p>;
  }

  return <PaymentPage serviceType={service.service_code} />;
}
