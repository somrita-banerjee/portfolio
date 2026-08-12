"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BsArrowUpRight,
    BsGithub,
    BsChevronDown,
    BsChevronUp,
    BsCheck2Circle,
} from "react-icons/bs";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-[#232329] p-6 shadow-xl transition-all duration-300 hover:border-accent/30"
        >
            <div>
                {/* Top bar: Category Badge & Project Number */}
                <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        {project.category}
                    </span>
                    <span className="font-mono text-3xl font-extrabold text-white/30">
                        {project.num}
                    </span>
                </div>

                {/* Preview Box / Visual */}
                <div className="relative mb-5 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-primary/80 transition-all group-hover:border-accent/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/40 opacity-70 transition-opacity group-hover:opacity-100"></div>
                    <div className="z-10 p-4 text-center">
                        <div className="font-mono mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xl font-bold text-accent">
                            {project.num}
                        </div>
                        <p className="font-mono text-xs text-white/60">{project.title}</p>
                    </div>
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-accent">
                    {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                {/* Expandable "My Contribution" Section */}
                <div className="mb-4 border-t border-white/10 pt-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-hover"
                        aria-expanded={isExpanded}
                    >
                        <span>My Contributions</span>
                        {isExpanded ? (
                            <BsChevronUp className="text-sm" />
                        ) : (
                            <BsChevronDown className="text-sm" />
                        )}
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 space-y-2 overflow-hidden text-xs text-white/80"
                            >
                                {project.contributions.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <BsCheck2Circle className="mt-0.5 shrink-0 text-sm text-accent" />
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                {/* Action Buttons: Live Demo & GitHub */}
                <div className="flex items-center gap-3 pt-2">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-md transition-all hover:bg-accent-hover"
                        >
                            <span>Live Demo</span>
                            <BsArrowUpRight className="text-base" />
                        </a>
                    )}

                    {project.github && (
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all hover:border-accent/40 hover:text-accent"
                                        aria-label="GitHub Repository"
                                    >
                                        <BsGithub className="text-xl" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub Repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
