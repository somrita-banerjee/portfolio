import Link from "next/link";
import Social from "./Social";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-primary py-8 text-white/60">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="mb-1 text-xl font-bold text-white">
                        Somrita<span className="text-accent">.</span>
                    </Link>
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} Somrita Banerjee. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2 md:items-end">
                    <span className="font-mono text-xs uppercase tracking-wider text-white/40">
                        Personal Socials
                    </span>
                    <Social
                        showAll={true}
                        containerStyles="flex gap-4"
                        iconstyles="w-8 h-8 border border-white/10 rounded-full flex justify-center items-center text-white/60 text-sm hover:border-accent hover:text-accent transition-all duration-300"
                    />
                </div>
            </div>
        </footer>
    );
}
