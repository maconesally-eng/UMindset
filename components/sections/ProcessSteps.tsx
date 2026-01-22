export function ProcessSteps() {
    const steps = [
        {
            stage: "Step 1: Application",
            title: "Diagnostic Call",
            desc: "Book a diagnostic call. We'll assess fit, discuss your goals, and determine if the program is right for your situation."
        },
        {
            stage: "Step 2: Onboarding",
            title: "Deep Intake",
            desc: "Complete your comprehensive intake assessment. We'll map your mental patterns, identify leverage points, and design your custom protocol."
        },
        {
            stage: "Step 3: Implementation",
            title: "12 Weeks of Focus",
            desc: "12 weeks of focused coaching, practice, and integration. This is where the work happens and the change locks in."
        },
        {
            stage: "Step 4: Graduation",
            title: "System Installed",
            desc: "You leave with a fully operational mindset system—plus founder-level access to our resource library and alumni community."
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                        The Process
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                                {step.stage.split(":")[0]}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.desc}
                            </p>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent translate-x-1/2 -z-10 opacity-30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
