import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Diagnostic Call",
            desc: "We identify your specific mental bottlenecks—the invisible patterns sabotaging your performance. No guessing. No generic advice."
        },
        {
            step: "02",
            title: "Custom Protocol",
            desc: "You receive a personalized mindset framework engineered for your goals, triggers, and lifestyle. This isn't one-size-fits-all."
        },
        {
            step: "03",
            title: "Implementation + Accountability",
            desc: "Weekly coaching sessions to install new mental patterns, overcome resistance, and lock in lasting change. Real-time support when you need it."
        },
        {
            step: "04",
            title: "Integration",
            desc: "Your new operating system becomes default. You stop managing your mindset and start leveraging it."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 border-y border-white/5 bg-zinc-900/20">
            <div className="container px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                        A systematic approach. <br />
                        <span className="text-primary">Not another hype session.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {steps.map((item, i) => (
                        <div key={i} className="relative pt-8">
                            <span className="text-6xl font-black text-white/5 absolute top-0 left-0 -z-10 select-none">
                                {item.step}
                            </span>
                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-1 bg-primary mb-6" />
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-8 h-12 text-lg">
                        Book a Call <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
