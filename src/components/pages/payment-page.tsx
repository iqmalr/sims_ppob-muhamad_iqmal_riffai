"use client";
import Hero from "../elements/hero";
import PaymentType from "../elements/payment-type";

type Props = {
  serviceType?: string;
};

const PaymentPage = ({ serviceType }: Props) => {
  return (
    <>
      <div>
        <Hero />

        <PaymentType serviceType={serviceType} />
      </div>
    </>
  );
};

export default PaymentPage;
