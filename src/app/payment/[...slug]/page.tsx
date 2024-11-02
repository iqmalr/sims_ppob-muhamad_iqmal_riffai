import PaymentPage from "@/components/pages/payment-page";
import services from "@/data/services";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  return {
    title: "Payment - SIMS PPOB",
  };
};

export default function Payment({ params, searchParams }: Props) {
  const { slug } = params;

  if (!slug || slug.length === 0) {
    return null;
  }

  const serviceType = slug[0].toUpperCase();
  const service = services.find((s) => s.service_code === serviceType);

  if (!service) {
    return <p>Service not found</p>;
  }

  return <PaymentPage serviceType={service.service_name} />;
}
