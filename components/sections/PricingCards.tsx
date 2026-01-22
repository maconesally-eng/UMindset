import { GradientButton } from "@/components/ui/gradient-button";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingCards() {
    return (
        <section className="py-24 bg-zinc-900/20">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        Membership <span className="text-primary">Tiers</span>
                    </h2>
                    <p className="text-muted-foreground">Select your level of commitment.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Core */}
                    <Card className="bg-black border-zinc-800 flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">The Core</CardTitle>
                            <div className="text-3xl font-black mt-2 text-white">Application Only</div>
                            <p className="text-muted-foreground text-sm">For those ready to start the shift.</p>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            {["Full Curriculum Access", "Weekly Q&A Calls", "Private Discord Community", "Resource Library"].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-white/50" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <GradientButton className="w-full bg-zinc-900" glow={false}>Apply for Core</GradientButton>
                        </CardFooter>
                    </Card>

                    {/* Inner Circle */}
                    <Card className="bg-zinc-900 border-primary/50 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-white">Inner Circle</CardTitle>
                            <div className="text-3xl font-black mt-2 text-primary">Application Only</div>
                            <p className="text-muted-foreground text-sm">Direct mentorship & aggressive scaling.</p>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            {["Everything in Core", "1-on-1 Strategy Calls", "In-Person Events", "Direct Founder Access", "Business Audit"].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary" />
                                    <span className="text-white">{item}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <GradientButton className="w-full">Apply for Inner Circle</GradientButton>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
