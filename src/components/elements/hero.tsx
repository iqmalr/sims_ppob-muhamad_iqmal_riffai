import ProfileCard from "./profile-card";
import SaldoCard from "./saldo-card";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex mb-10">
      <ProfileCard />
      <SaldoCard />
    </div>
  );
};

export default Hero;
