"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { BsGithub } from "react-icons/bs";

export default function ProjectsPage() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="flex min-h-[80vh] flex-col justify-center py-8 xl:py-12"
        >
            <div className="container mx-auto">
                <div className="mb-10 flex flex-col items-center text-center xl:items-start xl:text-left">
                    <span className="font-mono mb-2 text-sm uppercase tracking-wider text-accent">
                        Featured Work
                    </span>
                    <h1 className="mb-4 text-4xl font-bold text-white xl:text-5xl">
                        Featured <span className="text-accent">Projects</span>
                    </h1>
                    <p className="max-w-[650px] text-base leading-relaxed text-white/70">
                        Explore full-stack web applications, mobile software, and backend
                        architectures I&apos;ve designed and engineered. Each project highlights key
                        technical contributions, clean code principles, and modern stack
                        integrations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* GitHub CTA banner */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#232329] p-8 md:flex-row">
                    <div>
                        <h3 className="mb-1 text-xl font-bold text-white">
                            Looking for more code & repositories?
                        </h3>
                        <p className="text-sm text-white/70">
                            Check out my complete activity, repositories, and open-source
                            contributions on GitHub.
                        </p>
                    </div>
                    <a
                        href="https://github.com/somrita-banerjee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-accent-hover"
                    >
                        <BsGithub className="text-xl" />
                        <span>Visit GitHub Profile</span>
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
