import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UMindset | High-Performance Mindset Coaching",
    template: "%s | UMindset"
  },
  description: "Stop overthinking. Start performing. The UMindset Protocol rewires your identity for 7-figure output. 90-day intensive coaching for ambitious professionals.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umindset.com",
    title: "UMindset | High-Performance Mindset Coaching",
    description: "Stop overthinking. Start performing. The UMindset Protocol rewires your identity for 7-figure output.",
    siteName: "UMindset",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMindset | High-Performance Mindset Coaching",
    description: "Stop overthinking. Start performing. High-performance mindset coaching for ambitious professionals.",
    creator: "@umindset",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${interTight.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
