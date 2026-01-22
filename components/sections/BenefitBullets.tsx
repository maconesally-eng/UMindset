import { CheckCircle2 } from "lucide-react";

export function BenefitBullets() {
    const benefits = [
        {
            title: "Decisions become clear.",
            desc: "No more second-guessing or analysis paralysis. You know what to do and you do it."
        },
        {
            title: "Pressure becomes fuel.",
            desc: "High-stakes situations sharpen your focus instead of triggering shutdown mode."
        },
        {
            title: "Consistency becomes automatic.",
            desc: "Stop relying on willpower. Build mental frameworks that run on autopilot."
        },
        {
            title: "Confidence becomes quiet.",
            desc: "Not the loud, fragile kind. The unshakeable knowing that you'll figure it out."
        },
        {
            title: "Results compound.",
            desc: "When your inner game is solid, your outer game accelerates without burning you out."
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-16 text-center">
                    What changes when your mindset <br className="hidden md:block" />
                    <span className="text-primary">actually works for you:</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
