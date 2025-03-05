import Image from "next/image";

//components
import HeroSection from "../components/HeroSection";
import TrustSection from "../components/TrustSection";
import SecuritySection from "../components/SecuritySection"
import DownloadSection from "../components/DownloadSection";
import StatisticsSection from "../components/StatisticsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection"
import ServicesSection from "../components/ServicesSection";
import IntegrationSection from "../components/IntegrationSection"
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";


export default function Home() {
  return (
    <>
    <HeroSection />
      <TrustSection />
      <SecuritySection/>
      <DownloadSection/>
      <StatisticsSection/>
      <WhyChooseUsSection/>
      <ServicesSection/>
      <IntegrationSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
}
