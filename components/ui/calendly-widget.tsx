"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CalendlyWidgetProps {
    url: string;
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);

        return () => {
            // Cleanup script if needed, though usually fine to leave for SPA
            // head?.removeChild(script); 
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div className="w-full h-[700px] overflow-hidden border border-border/50 rounded-lg bg-background shadow-sm">
            <div
                className="calendly-inline-widget w-full h-full"
                data-url={url}
                style={{ minWidth: "320px", height: "700px" }}
            />
        </div>
    );
}

export function CalendlyPopup({ url }: CalendlyWidgetProps) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);
    }, []);

    return null; // This component just loads the script for popup functionalities if needed
}
