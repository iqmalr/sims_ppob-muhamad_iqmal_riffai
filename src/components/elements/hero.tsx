import ProfileCard from "./profile-card";
import SaldoCard from "./saldo-card";

const Hero = () => {
  return (
    <div className="flex mb-10">
      <ProfileCard />
      <SaldoCard />
    </div>
  );
};

export default Hero;
