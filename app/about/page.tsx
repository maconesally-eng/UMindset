import { AboutHero } from "@/components/sections/AboutHero";
import { PhilosophyGrid } from "@/components/sections/PhilosophyGrid";
import { FounderHero } from "@/components/sections/FounderHero";
import { Values } from "@/components/sections/Values";
import { AboutCTA } from "@/components/sections/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Built for high-performers tired of plateau. Our philosophy combines cognitive behavioral science with peak performance strategy.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <AboutHero />
            <PhilosophyGrid />
            <FounderHero />
            <Values />
            <AboutCTA />
        </main>
    );
}
