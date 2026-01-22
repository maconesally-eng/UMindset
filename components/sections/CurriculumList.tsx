import { Badge } from "@/components/ui/badge";

export function CurriculumList() {
    const modules = [
        {
            title: "Phase I: Deconstruction",
            duration: "Week 1-2",
            description: "Identifying and removing the 'poverty viruses' in your cognition. We strip you down to zero.",
            tags: ["Psychology", "Audit"],
        },
        {
            title: "Phase II: The Reconstruction",
            duration: "Week 3-6",
            description: "Installing the operating system of the 1%. New beliefs, new habits, new standards.",
            tags: ["Identity", "Habits"],
        },
        {
            title: "Phase III: Value Creation",
            duration: "Week 7-10",
            description: "Learning the high-income skills that the market actually pays for. No theory, only deployment.",
            tags: ["Sales", "Product"],
        },
        {
            title: "Phase IV: Network Leverage",
            duration: "Lifetime",
            description: "Access to the brotherhood. You become the average of the 5 people you spend time with. We upgrade your 5.",
            tags: ["Community", "Network"],
        },
    ];

    return (
        <section className="py-24">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        The <span className="text-primary">Curriculum</span>
                    </h2>
                    <p className="text-muted-foreground">The exact roadmap to shifting your reality.</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                    {modules.map((module, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 group-hover:bg-primary group-hover:border-primary transition-colors shadow shadow-white/5 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="text-xs font-bold">{i + 1}</span>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{module.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                                <div className="flex gap-2">
                                    {module.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5">{tag}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
