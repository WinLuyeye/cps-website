//components
import HeroSection from "../../components/solutions/HeroSection";
import FindPark from "../../components/solutions/FindPark";
import DepanExpress from "@/src/components/solutions/DepanExpress";

export default function Apropos() {
  return (
    <>
      <HeroSection />
      <div className="space-y-16">
        <FindPark />
        <DepanExpress />
      </div>
    </>
  );
}
