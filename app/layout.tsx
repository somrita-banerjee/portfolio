import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
    title: "Somrita Banerjee — Full Stack Developer | Final Year CSE",
    description:
        "Portfolio of Somrita Banerjee, a Full Stack Developer & Final Year Computer Science Engineering student specializing in Next.js, React, Node.js, and modern web applications.",
    keywords: [
        "Somrita Banerjee",
        "Full Stack Developer",
        "Computer Science Engineering",
        "Software Developer Portfolio",
        "React Developer",
        "Next.js Developer",
        "Node.js Backend",
    ],
    authors: [{ name: "Somrita Banerjee" }],
    openGraph: {
        title: "Somrita Banerjee — Full Stack Developer | Final Year CSE",
        description:
            "Explore full-stack applications, interactive projects, and software engineering capabilities by Somrita Banerjee.",
        type: "website",
        locale: "en_US",
        siteName: "Somrita Banerjee Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Somrita Banerjee — Full Stack Developer | Final Year CSE",
        description:
            "Portfolio of Somrita Banerjee, Full Stack Developer and Computer Science Engineering student.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${jetbrainsMono.className} flex min-h-screen flex-col justify-between`}
            >
                <div>
                    <Header />
                    <StairTransition />
                    <PageTransition>{children}</PageTransition>
                </div>
                <Footer />
            </body>
        </html>
    );
}
