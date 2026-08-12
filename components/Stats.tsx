"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface StatItem {
    num: number;
    text: string;
}

export default function Stats() {
    const [publicRepos, setPublicRepos] = useState<number>(14);

    useEffect(() => {
        async function fetchGitHubStats() {
            try {
                const res = await fetch("https://api.github.com/users/somrita-banerjee");
                if (res.ok) {
                    const data = await res.json();
                    if (data && typeof data.public_repos === "number") {
                        setPublicRepos(data.public_repos);
                    }
                }
            } catch (err) {
                // Graceful fallback to default repo count
            }
        }
        fetchGitHubStats();
    }, []);

    const statsList: StatItem[] = [
        {
            num: publicRepos,
            text: "Public Repositories",
        },
        {
            num: 6,
            text: "Languages Mastered",
        },
        // {
        //     num: 1,
        //     text: "Google Developer Badge",
        // },
        {
            num: 12,
            text: "Core Tech Frameworks",
        },
    ];

    return (
        <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
            <div className="container mx-auto">
                <div className="mx-auto flex max-w-[80vw] flex-wrap justify-between gap-6 xl:max-w-none">
                    {statsList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                            >
                                <CountUp
                                    end={item.num}
                                    duration={4}
                                    delay={0.5}
                                    className="font-mono text-4xl font-extrabold text-accent xl:text-6xl"
                                />
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-sm leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
