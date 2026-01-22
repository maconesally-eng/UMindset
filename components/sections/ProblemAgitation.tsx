import { Check, X } from "lucide-react";

export function ProblemAgitation() {
    const problems = [
        "You've read the books, done the courses, listened to the podcasts—yet you're still stuck in the same patterns",
        "You know you're capable of more, but something keeps pulling you back to average",
        "You crush it for a few weeks, then self-sabotage right before the breakthrough",
        "You're exhausted from fighting yourself instead of moving forward",
        "Decision fatigue is eating your potential alive",
    ];

    return (
        <section className="py-24 bg-zinc-950/50">
            <div className="container px-4 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Sound familiar?</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                        You don't have a motivation problem.
                    </h2>
                </div>

                <div className="space-y-6">
                    {problems.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                            <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                            <p className="text-lg text-muted-foreground">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-2xl font-medium text-white max-w-3xl mx-auto">
                        You have a mindset operating system that's running <span className="text-primary">outdated software.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
