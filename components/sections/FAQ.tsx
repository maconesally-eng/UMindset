import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items?: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
    const defaultFaqs = [
        {
            question: "I've tried coaching/courses before. Nothing sticks.",
            answer: "Most programs give you information without installation. We don't teach you what to think—we rewire how you think. That's why our approach uses deliberate practice and accountability, not just content consumption.",
        },
        {
            question: "I don't have time for another program.",
            answer: "You don't have time to keep operating at 60% capacity. Our protocols are designed to integrate into demanding schedules—expect 2-3 hours per week total, including sessions. Most clients report time savings within weeks as decision-making speeds up.",
        },
        {
            question: "How do I know this will work for me?",
            answer: "You don't—yet. That's why the diagnostic call is free. We'll identify if there's a real fit and what specific results you could expect. No pressure, no pitch if it's not right.",
        },
        {
            question: "What if I'm not ready?",
            answer: "If you're reading this far, you're ready. The question is whether you'll take action or bookmark this page like the others.",
        },
    ];

    const displayFaqs = items || defaultFaqs;

    return (
        <section className="py-24 max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                    The hard questions, <span className="text-primary">answered.</span>
                </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {displayFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
