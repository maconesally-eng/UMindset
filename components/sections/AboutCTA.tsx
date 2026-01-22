import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
    return (
        <section className="py-24 md:py-32 bg-zinc-950 border-t border-white/10 text-center">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">
                    Ready to stop reading about <span className="text-primary">change?</span>
                </h2>
                <Link href="/contact">
                    <Button size="lg" className="h-14 px-8 text-xl font-bold bg-primary hover:bg-primary/90 text-white">
                        Book a Call <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
