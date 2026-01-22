import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";

export function FounderHero() {
    return (
        <section className="py-24 md:py-32">
            <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-0 overflow-hidden rounded-sm bg-zinc-900 border border-white/10 group">
                    {/* Founder Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <Image
                        src="/founder.png"
                        alt="Founder"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <h3 className="text-2xl font-bold text-white">Sam Riley</h3>
                        <p className="text-primary font-medium">Founder, UMindset</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Your Coach</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                        Sam Riley
                    </h1>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I'm Sam, and I'm here to do whatever it takes to see you succeed.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-white font-medium">Brand Strategy</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-white font-medium">Audience Growth</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-white font-medium">Campaign Systems</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-white font-medium">Proven Outcomes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
