import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Shield } from "lucide-react";

export function PhilosophyGrid() {
    const values = [
        {
            icon: Shield,
            title: "Evidence-based, not guru-based.",
            description: "We use frameworks from cognitive behavioral science, peak performance research, and behavioral economics. Nothing mystical. Nothing we can't explain.",
        },
        {
            icon: Zap,
            title: "Installation over information.",
            description: "You don't need more books. You need new mental patterns that fire automatically under pressure. We focus on implementation, repetition, and real-world application.",
        },
        {
            icon: Target,
            title: "Individualized architecture.",
            description: "Your brain, history, and goals are unique. Cookie-cutter programs create cookie-cutter results. Everything we build is customized to your specific operating context.",
        },
        {
            icon: Zap, // Using Zap again or another icon like Award if available, but Zap is fine for now or I can import Award
            title: "Results or nothing.",
            description: "We're not interested in feel-good sessions. If you're not seeing measurable progress, we're not doing our job.",
        },
    ];

    return (
        <section className="py-24 bg-zinc-900/30 border-y border-white/5">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        Our <span className="text-primary">approach.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <Card key={i} className="bg-black border-zinc-800 hover:border-primary/50 transition-colors group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <value.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold text-white">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
