import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
    const links = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
                    UMINDSET
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold tracking-tight rounded-sm">
                            Book a Call
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background border-border">
                        <div className="flex flex-col gap-6 mt-6">
                            <Link href="/" className="font-mono text-xl font-bold tracking-tighter">
                                UMINDSET
                            </Link>
                            <div className="flex flex-col gap-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground/80 hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href="/contact" className="w-full mt-4">
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-sm">
                                        Book a Call
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
