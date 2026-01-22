import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            </div>

            <div className="container relative px-4 max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-muted-foreground italic mb-8">
                    Your mindset is either working for you or against you.
                </p>

                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                    90 days from now, you'll be a <br />
                    <span className="text-primary">different operator.</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    The patterns holding you back won't resolve themselves. Every week you wait is another week of leaving performance on the table.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-8 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_var(--color-primary)]">
                            Book Your Diagnostic Call <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        30 minutes. No pitch if it's not a fit. Just clarity.
                    </p>
                </div>
            </div>
        </section>
    );
}
