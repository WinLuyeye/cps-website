// Components
import HeroSection from "../../components/apropos/herosection";
import ExperienceSection from "../../components/apropos/ExperienceSection";
import TrustSection from "@/src/components/TrustSection";
import ValuesAndHistory from "@/src/components/apropos/ValuesAndHistory";
import ContactSection from "@/src/components/ContactSection";
import StatisticsSection from "@/src/components/StatisticsSection";
import TeamSection from "@/src/components/team/Team";

export default function Apropos() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <TrustSection />
      <ValuesAndHistory />
      <ContactSection />
      <StatisticsSection />
      <TeamSection />
    </>
  );
}
