"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ApplicationForm() {
    return (
        <div className="w-full max-w-xl mx-auto p-8 rounded-lg border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Request Access</h3>
                <p className="text-sm text-muted-foreground">
                    We only accept 10 applications per month. Be honest.
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" className="bg-black/50 border-white/10" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" className="bg-black/50 border-white/10" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="income">Current Monthly Income</Label>
                    <Input id="income" placeholder="$2,500" className="bg-black/50 border-white/10" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="goal">Why do you want to join?</Label>
                    <Textarea
                        id="goal"
                        placeholder="Tell us why you deserve a spot..."
                        className="min-h-[100px] bg-black/50 border-white/10"
                    />
                </div>

                <GradientButton className="w-full text-lg font-bold py-6">
                    Submit Application
                </GradientButton>
            </form>
        </div>
    );
}
