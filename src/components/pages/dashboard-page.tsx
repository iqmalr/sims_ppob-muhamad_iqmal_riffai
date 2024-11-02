"use client";
import Hero from "../elements/hero";
import Promos from "../elements/promos";
import Services from "../elements/services";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <Hero />
      <Services />
      <Promos />
    </>
  );
};

export default DashboardPage;
