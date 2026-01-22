import { ContactHero } from "@/components/sections/ContactHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactProof } from "@/components/sections/ContactProof";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CalendlyWidget } from "@/components/ui/calendly-widget";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Book a free diagnostic call. Identify your mental bottlenecks and see if the Protocol is right for you.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pb-0">
            <ContactHero />

            <section id="booking" className="container max-w-5xl mx-auto px-4 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Book Your Free Diagnostic Call</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        In 30 minutes, we'll identify the specific mental patterns limiting your performance and determine if there's a genuine fit for working together.
                    </p>
                </div>
                <CalendlyWidget url="https://calendly.com/your-calendly-link" />
            </section>

            <ContactInfo />
            <ContactProof />
            <ContactCTA />
        </main>
    );
}
