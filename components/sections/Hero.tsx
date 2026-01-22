import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6">
                    Stop Overthinking. <br />
                    <span className="text-primary">Start Performing.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    High-performance mindset coaching for ambitious professionals who are done playing small. Transform how you think, decide, and execute—in 90 days or less.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                        <GradientButton size="lg" className="h-12 px-8 text-lg font-bold">
                            Book a Call <ArrowRight className="ml-2 h-5 w-5" />
                        </GradientButton>
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground"
                    >
                        See How It Works ↓
                    </Link>
                </div>
            </div>
        </section>
    );
}
