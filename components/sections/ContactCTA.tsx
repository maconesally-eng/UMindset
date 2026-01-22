import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="py-24 text-center bg-zinc-950 border-t border-white/10">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                    Stop researching. <br />
                    <span className="text-primary">Start transforming.</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                    You already know if you need this. The question is whether you'll take action or keep thinking about it.
                </p>
                <Link href="#booking">
                    <Button size="lg" className="h-14 px-8 text-xl font-bold bg-primary hover:bg-primary/90 text-white">
                        Book Your Call Now <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
