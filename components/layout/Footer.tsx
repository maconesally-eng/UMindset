import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-12 md:py-16 lg:py-24">
            <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-foreground">
                        UMINDSET
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        **Your mindset. Upgraded.**
                    </p>
                    <a href="mailto:hello@umindset.com" className="text-sm font-medium hover:text-primary">
                        hello@umindset.com
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-foreground">Navigation</h3>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
                    <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-foreground">Legal</h3>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-foreground">Socials</h3>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter / X</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Instagram</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</Link>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                    © {new Date().getFullYear()} UMindset. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
