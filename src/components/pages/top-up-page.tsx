"use client";
import Hero from "../elements/hero";
import TopUpItems from "../elements/top-up-items";

type Props = {};

const TopUpPage = (props: Props) => {
  return (
    <div>
      <Hero />
      <TopUpItems />
    </div>
  );
};

export default TopUpPage;
