"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaAndroid,
    FaPython,
    FaGitAlt,
    FaUniversity,
    FaAward,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiTypescript,
    SiKotlin,
    SiDjango,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiExpress,
    SiChainlink,
    SiCoursera,
    SiGoogle,
    SiSolidity,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative, TbBrandCpp } from "react-icons/tb";
import {
    BsArrowUpRight,
    BsAward,
    BsLightningCharge,
    BsCheckCircleFill,
    BsEye,
    BsX,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Certification {
    title: string;
    issuer: string;
    description: string;
    badgeUrl?: string;
    image?: string;
    verified?: boolean;
    icon: React.ReactNode;
}

const about = {
    title: "About Me",
    description:
        "Final-year Computer Science and Engineering student with hands-on experience building full-stack web and mobile applications. Proficient in TypeScript, React, Next.js, Node.js, and Django, with a strong focus on backend security, API optimization, and clean UI engineering.",
    currentlyWorkingOn:
        "Cybersecurity, focusing on learning security fundamentals, identifying vulnerabilities, understanding threats, and improving skills in ethical hacking and network security.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Somrita Banerjee",
        },
        {
            fieldName: "Degree",
            fieldValue: "B.Tech in CSE (Final Year)",
        },
        {
            fieldName: "Email",
            fieldValue: "7vrveflhx@mozmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Freelance / Roles",
            fieldValue: "Available for Hire",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Bengali",
        },
    ],
};

const education = {
    title: "My Education",
    description:
        "A rigorous academic foundation in computer science principles, data structures, algorithms, and modern software engineering.",
    items: [
        {
            institution: "Guru Nanak Institute of Technology",
            degree: "B.Tech in Computer Science & Engineering",
            duration: "2023 - Present",
        },
        {
            institution: "Assembly of Christ School",
            degree: "Senior Secondary (ISC)",
            duration: "2020 - 2022",
        },
        {
            institution: "Assembly of Christ School",
            degree: "Secondary (ICSE)",
            duration: "2020",
        },
    ],
};

const skillCategories = [
    {
        category: "Frontend Engineering",
        skills: [
            { icon: <RiNextjsFill />, name: "Next.js" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3 />, name: "CSS3" },
            { icon: <FaFigma />, name: "Figma" },
        ],
    },
    {
        category: "Backend & Databases",
        skills: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiDjango />, name: "Django" },
            { icon: <FaPython />, name: "Python" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiSolidity />, name: "Solidity" },
        ],
    },
    {
        category: "Mobile & Core Tech",
        skills: [
            { icon: <TbBrandReactNative />, name: "React Native" },
            { icon: <SiKotlin />, name: "Kotlin" },
            { icon: <FaAndroid />, name: "Android Studio" },
            { icon: <TbBrandCpp />, name: "C / C++" },
            { icon: <FaGitAlt />, name: "Git & GitHub" },
        ],
    },
];

const certifications: Certification[] = [
    {
        title: "Internship Certificate",
        issuer: "Asian Institute of Technology",
        description:
            "Certificate for completing an internship at the Asian Institute of Technology.",
        image: "/assets/certificates/intern.jpeg",
        verified: true,
        icon: <FaUniversity className="text-4xl text-accent" />,
    },
    {
        title: "Winner of the Global Innovation Project",
        issuer: "Asian Institute of Technology",
        description:
            "Certificate for acheiving the winning place in Global Innovation Project organized by the Asian Institute of Technology.",
        image: "/assets/certificates/winner.jpeg",
        verified: true,
        icon: <FaAward className="text-4xl text-accent" />,
    },
    {
        title: "Participation Certificate",
        issuer: "Asian Institute of Technology",
        description:
            "Certificate for Participating in the workshop on Epicollect: Mobile mapping, Communication Skills and Campus to Corporate.",
        image: "/assets/certificates/epicollect.jpeg",
        verified: true,
        icon: <FaUniversity className="text-4xl text-accent" />,
    },
    {
        title: "Neural Networks and Deep Learning",
        issuer: "Coursera",
        description:
            "Official recognition for verified skills in Neural Networks and Deep Learning.",
        badgeUrl:
            "https://www.coursera.org/account/accomplishments/verify/0H2FTTVEOAEU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        verified: true,
        icon: <SiCoursera className="text-4xl text-accent" />,
    },
    {
        title: "Blockchain Fundamentals Certification",
        issuer: "Chainlink Labs",
        description:
            "This certification provides foundational knowledge, enabling learners to explore the potential of blockchain beyond cryptocurrencies.",
        badgeUrl: "https://www.credly.com/badges/42f24d3e-ec29-40c4-b302-d3fae40ab446",
        verified: true,
        icon: <SiChainlink className="text-4xl text-accent" />,
    },
    {
        title: "Protect Sensitive Data with Data Loss Prevention Skill Badge",
        issuer: "Google Cloud",
        description:
            "This badge demonstrates skills using the Data Loss Prevention (DLP) API to inspect, redact, and de-identify sensitive data ",
        badgeUrl: "https://www.credly.com/badges/90c66a99-14c9-4d47-b235-0d624af348a8",
        verified: true,
        icon: <SiGoogle className="text-4xl text-accent" />,
    },
];

const Resume = () => {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedCert(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="flex min-h-[80vh] flex-col justify-center py-8 xl:py-12"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col gap-[60px] xl:flex-row">
                    <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-4 xl:mx-0">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="skills">Skills & Expertise</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="certifications">Certifications</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* About Tab */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                                <p className="mx-auto max-w-[650px] text-base leading-relaxed text-white/70 xl:mx-0">
                                    {about.description}
                                </p>

                                {/* Currently Working On Line */}
                                <div className="mx-auto flex max-w-[650px] items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-left xl:mx-0">
                                    <BsLightningCharge className="shrink-0 text-2xl text-accent" />
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-accent">
                                            Currently Learning & Building
                                        </span>
                                        <span className="text-sm font-medium text-white">
                                            {about.currentlyWorkingOn}
                                        </span>
                                    </div>
                                </div>

                                <ul className="mx-auto grid max-w-[650px] grid-cols-1 gap-x-8 gap-y-4 pt-2 text-left xl:mx-0 xl:grid-cols-2">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between rounded-lg border border-white/5 bg-[#232329] p-3"
                                            >
                                                <span className="text-sm text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-sm font-semibold text-white">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* Skills Tab */}
                        <TabsContent value="skills" className="h-full w-full">
                            <div className="flex flex-col gap-8">
                                <div className="text-center xl:text-left">
                                    <h3 className="mb-2 text-4xl font-bold text-white">
                                        Skills & Technical Stack
                                    </h3>
                                    <p className="max-w-[600px] text-white/70">
                                        Categorized technical competencies acquired through academic
                                        projects and software development.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {skillCategories.map((group, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <h4 className="border-b border-white/10 pb-1 text-lg font-semibold text-accent">
                                                {group.category}
                                            </h4>
                                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                                {group.skills.map((skill, sIdx) => (
                                                    <li key={sIdx}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="group flex h-[110px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-[#232329] transition-all hover:border-accent/40">
                                                                    <div className="text-4xl text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
                                                                        {skill.icon}
                                                                    </div>
                                                                    <span className="text-xs font-medium capitalize text-white/70 group-hover:text-white">
                                                                        {skill.name}
                                                                    </span>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">
                                                                        {skill.name}
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Education Tab */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-white">{education.title}</h3>
                                <p className="mb-2 max-w-[600px] text-white/70">
                                    {education.description}
                                </p>
                                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
                                    {education.items.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-[#232329] p-6 lg:items-start"
                                            >
                                                <span className="font-mono rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                                                    {item.duration}
                                                </span>
                                                <h4 className="mt-1 text-center text-lg font-bold text-white lg:text-left">
                                                    {item.degree}
                                                </h4>
                                                <p className="text-sm text-white/60">
                                                    {item.institution}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Certifications Tab */}
                        <TabsContent value="certifications" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-white">
                                    Certifications & Badges
                                </h3>
                                <p className="max-w-[600px] text-white/70">
                                    Verified developer credentials and technical achievements.
                                </p>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {certifications.map((cert, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#232329] p-6 text-left transition-all hover:border-accent/40"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                                    {cert.icon}
                                                </div>
                                                {cert.verified && (
                                                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                                                        <BsCheckCircleFill className="text-xs" />
                                                        <span>Verified</span>
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-xl font-bold text-white">
                                                    {cert.title}
                                                </h4>
                                                <p className="font-mono mb-2 text-xs text-accent">
                                                    {cert.issuer}
                                                </p>
                                                <p className="text-xs leading-relaxed text-white/70">
                                                    {cert.description}
                                                </p>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                                {/* If certificate has an image (PNG), show popup button */}
                                                {cert.image && (
                                                    <button
                                                        onClick={() => setSelectedCert(cert)}
                                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary shadow-md transition-all hover:bg-accent-hover"
                                                    >
                                                        <BsEye className="text-sm" />
                                                        <span>View Certificate</span>
                                                    </button>
                                                )}

                                                {/* If certificate has a verification link */}
                                                {cert.badgeUrl && (
                                                    <a
                                                        href={cert.badgeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white transition-all hover:border-accent/40 hover:text-accent ${
                                                            !cert.image ? "w-full sm:w-auto" : ""
                                                        }`}
                                                    >
                                                        <span>Verify Credential</span>
                                                        <BsArrowUpRight className="text-sm" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Placeholder for future certs */}
                                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 p-8 text-center text-white/40">
                                        <BsAward className="mb-2 text-4xl" />
                                        <span className="text-xs font-semibold uppercase tracking-wider">
                                            More Certifications In Progress
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            {/* Certificate PNG Image Lightbox Popup Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-white/15 bg-[#1c1c22] p-6 shadow-2xl"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="font-mono text-xs text-accent">
                                        Issued by {selectedCert.issuer}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent hover:text-accent"
                                    aria-label="Close popup"
                                >
                                    <BsX className="text-2xl" />
                                </button>
                            </div>

                            {/* Modal Image Container */}
                            <div className="flex max-h-[65vh] flex-1 items-center justify-center overflow-auto py-4">
                                {selectedCert.image && (
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        width={900}
                                        height={650}
                                        className="max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                                    />
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                                <p className="text-xs text-white/60">
                                    Click anywhere outside or press{" "}
                                    <span className="font-mono text-accent">Esc</span> to close
                                </p>
                                <div className="flex items-center gap-3">
                                    {selectedCert.image && (
                                        <a
                                            href={selectedCert.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition-all hover:border-accent hover:text-accent"
                                        >
                                            <span>Open Original</span>
                                            <BsArrowUpRight className="text-xs" />
                                        </a>
                                    )}
                                    {selectedCert.badgeUrl && (
                                        <a
                                            href={selectedCert.badgeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-accent-hover"
                                        >
                                            <span>Verify Credential</span>
                                            <BsArrowUpRight className="text-xs" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Resume;
