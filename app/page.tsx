import { Hero } from "@/components/sections/Hero";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { BenefitBullets } from "@/components/sections/BenefitBullets";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "High-performance mindset coaching for ambitious professionals. Transform how you think, decide, and execute in 90 days.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ProblemAgitation />
      <BenefitBullets />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
