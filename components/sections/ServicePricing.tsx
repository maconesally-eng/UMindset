import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicePricing() {
    return (
        <section className="py-24">
            <div className="container max-w-4xl mx-auto px-4">
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-2xl font-bold">Investment</CardTitle>
                    </CardHeader>

                    <CardContent className="text-center space-y-6 pt-6">
                        <div className="p-8 border border-dashed border-white/10 rounded bg-black/40 max-w-lg mx-auto">
                            <div className="text-3xl font-mono text-white/50 mb-4">
                                $X,XXX
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">
                                [REPLACE WITH REAL PRICING]
                            </p>
                            <p className="text-xs text-muted-foreground/60 italic">
                                "The investment for the 90-day program is $X,XXX. Payment plans are available for qualified applicants. This is not the cheapest option on the market. It's the most effective one for people who are serious about results."
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/contact" className="w-full max-w-xs mx-auto block">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                                    Apply for a Call
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
