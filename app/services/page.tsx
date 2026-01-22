import { ServicesHero } from "@/components/sections/ServicesHero";
import { ProgramDetails } from "@/components/sections/ProgramDetails";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicePricing } from "@/components/sections/ServicePricing";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCTA } from "@/components/sections/AboutCTA"; // Reusing CTA as effective
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "The Mindset Operating System. A 90-day intensive program to install the mental architecture of a top performer.",
};

export default function ServicesPage() {
    const servicesFaqs = [
        {
            question: "How is this different from therapy?",
            answer: "Therapy is primarily focused on processing the past and mental health treatment. We focus on performance optimization and future results. Many clients do both—they complement each other.",
        },
        {
            question: "What if I have a demanding schedule?",
            answer: "The program is designed for busy professionals. Expect 2-3 hours weekly, including sessions. Our highest-performing clients are often the busiest—they just prioritize strategically.",
        },
        {
            question: "Can I do this program remotely?",
            answer: "Yes. All sessions are conducted via video call. We work with clients globally across time zones.",
        },
        {
            question: "What's your refund policy?",
            answer: "There are no refunds. This ensures only committed clients enroll, which protects everyone's time and results. The diagnostic call exists so you can assess fit before investing.",
        },
        {
            question: "How fast will I see results?",
            answer: "Most clients report meaningful shifts within 2-3 weeks. Significant transformation typically occurs by weeks 6-8. Full integration happens by completion at week 12.",
        },
        {
            question: "Will this work for my specific situation?",
            answer: "That's what the diagnostic call determines. We'll discuss your specific challenges and give you a straight answer about whether this program can help—no pressure either way.",
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            <ServicesHero />
            <ProgramDetails />
            <ProcessSteps />
            <ServicePricing />
            <FAQ items={servicesFaqs} />
            <AboutCTA />
        </main>
    );
}
