export function ContactInfo() {
    return (
        <section className="py-24 border-t border-white/5 bg-zinc-900/10">
            <div className="container max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Other Inquiries</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-white mb-2">Speaking & Events</h3>
                        <a href="mailto:speaking@umindset.com" className="text-muted-foreground hover:text-primary transition-colors">
                            speaking@umindset.com
                        </a>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">Media & Press</h3>
                        <a href="mailto:press@umindset.com" className="text-muted-foreground hover:text-primary transition-colors">
                            press@umindset.com
                        </a>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">General Questions</h3>
                        <a href="mailto:hello@umindset.com" className="text-muted-foreground hover:text-primary transition-colors">
                            hello@umindset.com
                        </a>
                    </div>
                </div>

                <div className="mt-12 p-4 bg-zinc-900/50 border border-white/5 rounded-lg inline-block">
                    <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-bold">Note:</span> We typically respond within 24-48 business hours.
                    </p>
                </div>
            </div>
        </section>
    );
}
