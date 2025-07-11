// import Image from "next/image";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BenefitsSection from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import FeatureSection from "@/components/sections/feature";
import FeaturesList from "@/components/sections/features-list";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero section  */}
      <HeroSection />
      {/* feature section  */}
      <FeatureSection />
      {/* features list section  */}
      <FeaturesList />
      {/* benefits section  */}
      <BenefitsSection />
      {/* cta section  */}
      <CTA />
      {/* footer  */}
      <Footer />
    </>
  );
}
