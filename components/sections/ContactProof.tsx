import { Quote } from "lucide-react";

export function ContactProof() {
    return (
        <section className="py-16">
            <div className="container max-w-3xl mx-auto px-4 text-center">
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col items-center">
                    <Quote className="w-8 h-8 text-primary/30 mb-6" />
                    <p className="text-lg text-white mb-6 italic leading-relaxed">
                        "[PLACEHOLDER: Short, punchy testimonial about clarity or the call itself. e.g. 'I got more clarity in 30 minutes than I did in 3 years of therapy.']"
                    </p>
                    <div>
                        <div className="font-bold">Client Name</div>
                        <div className="text-sm text-muted-foreground">Title/Company</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
