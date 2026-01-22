import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgramDetails() {
    return (
        <section className="py-24 bg-zinc-900/10">
            <div className="container max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Core Program</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-4 mb-4">
                        THE MINDSET OPERATING SYSTEM
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        90 days to install the mental architecture of a top performer.
                    </p>
                </div>

                {/* What's Included */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Weekly 1:1 Coaching Sessions (60 min)</h3>
                            <p className="text-muted-foreground">Deep-dive sessions to identify blocks, install new frameworks, and hold you accountable to implementation.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Custom Mindset Protocol</h3>
                            <p className="text-muted-foreground">Your personalized playbook for managing pressure, making decisions, and maintaining peak state—built specifically for your brain and goals.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Real-time Support Access</h3>
                            <p className="text-muted-foreground">Voxer/text access for between-session questions, situation coaching, and momentum maintenance.</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Mental Performance Assessments</h3>
                            <p className="text-muted-foreground">Regular diagnostic check-ins to measure progress and recalibrate approach as you level up.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Integration Toolkit</h3>
                            <p className="text-muted-foreground">Scripts, frameworks, and exercises you'll use long after the program ends—this isn't rental, it's ownership.</p>
                        </div>
                    </div>
                </div>

                {/* Who For / Not For */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-zinc-950 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-primary" />
                                Who This Is For
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                "Founders and executives managing high-stakes decisions daily",
                                "Entrepreneurs stuck at a revenue plateau they can't seem to break",
                                "High-earners who know they're playing below their potential",
                                "Professionals preparing for a major career leap or transition",
                                "Anyone who's done with surface-level personal development"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-muted-foreground">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-950 border-white/5">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white/50">
                                <X className="w-5 h-5" />
                                Who This Is NOT For
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                "People looking for a quick fix or magic pill",
                                "Those unwilling to do uncomfortable inner work",
                                "Anyone who wants to be told what to do without thinking",
                                "People who aren't ready to invest seriously in themselves"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-muted-foreground/60">
                                    <X className="w-4 h-4 text-white/20 shrink-0 mt-1" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
