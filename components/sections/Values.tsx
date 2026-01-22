export function Values() {
    const beliefs = [
        {
            line: "Clarity > Comfort",
            desc: "We'll tell you what you need to hear, not what you want to hear."
        },
        {
            line: "Progress > Perfection",
            desc: "Small consistent wins beat occasional breakthroughs."
        },
        {
            line: "Ownership > Excuses",
            desc: "We give you tools. You do the work. No victims here."
        },
        {
            line: "Evidence > Opinion",
            desc: "If it can't be demonstrated, we don't teach it."
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-16">
                    What we <span className="text-primary">believe.</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {beliefs.map((item, i) => (
                        <div key={i} className="p-8 border border-white/5 bg-zinc-900/20 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">{item.line}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
