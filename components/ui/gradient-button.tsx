import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
    glow?: boolean;
}

export function GradientButton({ className, glow = true, children, ...props }: GradientButtonProps) {
    return (
        <div className={cn("relative group", className)}>
            {glow && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            )}
            <Button
                className="relative w-full bg-black text-white border border-white/10 hover:bg-zinc-900 transition-colors"
                {...props}
            >
                {children}
            </Button>
        </div>
    );
}
