import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";

export function FounderHero() {
    return (
        <section className="py-24 md:py-32">
            <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-0 overflow-hidden rounded-sm bg-zinc-900 border border-white/10 group">
                    {/* Placeholder for Founder Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-zinc-800">
                        [Founder Image Placeholder]
                    </div>
                    <div className="absolute bottom-6 left-6 z-20">
                        <h3 className="text-2xl font-bold text-white">The Founder</h3>
                        <p className="text-primary font-medium">Head of UMindset</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Your Coach</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                        [FOUNDER NAME]
                    </h1>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <div className="p-4 border border-dashed border-white/20 rounded bg-white/5 text-sm font-mono text-white/70">
                            [REPLACE WITH REAL BIO]
                            <br /><br />
                            Include:
                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                <li>Relevant credentials and certifications</li>
                                <li>Professional background</li>
                                <li>Personal story that establishes credibility</li>
                                <li>Notable results or client outcomes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
