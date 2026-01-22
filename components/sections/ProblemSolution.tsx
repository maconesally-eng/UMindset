import { X, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProblemSolution() {
    const problems = [
        "Trading time for money (Linear Growth)",
        "Waiting for permission/credentials",
        "Seeking validation from peers",
        "Consumed by cheap dopamine",
        "Undefined utility to the market",
    ];

    const solutions = [
        "Leveraging systems & assets (Exponential)",
        "Building permissionless authority",
        "Internal frame of reality",
        "Relentless focus on output",
        "High-value skill acquisition",
    ];

    return (
        <section className="py-24 md:py-32 relative">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                        The Modern Trap vs. <span className="text-primary">The Shift</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        You are operating on legacy code. The world has updated. UMindset installs the new operating system.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Old You */}
                    <Card className="bg-zinc-950 border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-[80px]" />
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold flex items-center gap-3 text-red-400">
                                <X className="w-6 h-6" />
                                The Old Identity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {problems.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-muted-foreground group-hover:text-red-200/70 transition-colors">
                                    <X className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* New You */}
                    <Card className="bg-zinc-900/50 border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[80px]" />
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold flex items-center gap-3 text-primary">
                                <Check className="w-6 h-6" />
                                The Protocol
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {solutions.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-white group-hover:text-primary-foreground transition-colors">
                                    <Check className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
