// import Image from "next/image";

import Navbar from "@/components/navbar";
import BenefitsSection from "@/components/sections/benefits";
import FeatureSection from "@/components/sections/feature";
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
      {/* benefits section  */}
      <BenefitsSection />
      {/* cta section  */}
      {/* footer  */}
    </>
  );
}
