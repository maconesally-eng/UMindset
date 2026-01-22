import { Quote } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-center mb-16">
                    Real results. <span className="text-primary">Real people.</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-zinc-800 mb-6 animate-pulse" />
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-muted-foreground mb-6 italic">
                                "The results I've achieved in 90 days outweigh the last 3 years of trying to figure it out myself. Absolute game changer."
                            </p>
                            <div>
                                <h4 className="font-bold">Client Name</h4>
                                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg max-w-2xl mx-auto">
                    <p className="text-yellow-200/80 text-sm font-medium">
                        [PLACEHOLDER: Replace with real video testimonials or authentic client wins. No fake proof allowed.]
                    </p>
                </div>
            </div>
        </section>
    );
}
