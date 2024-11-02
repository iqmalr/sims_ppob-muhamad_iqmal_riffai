import PaymentPage from "@/components/pages/payment-page";
import services from "@/data/services";

type Params = {
  slug: string[];
};

type Props = {
  params: Params;
};

const Payment = async ({ params }: Props) => {
  const { slug } = params;
  if (!slug || slug.length === 0) {
    return null;
  }
  const [serviceType] = slug;
  const service = services.find(
    (s) => s.service_code.toLowerCase() === serviceType
  );
  if (!service) {
    return <p>Service not found</p>;
  }
  return <PaymentPage serviceType={service?.service_name} />;
};

export default Payment;
