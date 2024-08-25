"use client";

import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAndroid } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiKotlin } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
    title: "About me",
    description: "lorem sahkf sfsfsfb dfdfbbfmre vvsfjh,gf sfsfsf",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Somrita Banerjee",
        },
        {
            fieldName: "E-mail",
            fieldValue: "somritabanerjee126@gmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Bengali",
        },
    ],
};

const education = {
    title: "My Education",
    description: "Lorem sfsfb dfgznms szbgzd xbzbzb vxbxzbxv czbvx,vn vbv",
    items: [
        {
            instituition: "Guru Nanak Institute of Technology",
            degree: "B.Tech in Computer Science and Engineering",
            duration: "2023 - present",
        },
        {
            instituition: "Assembly of Christ School",
            degree: "Senior Secondary(ISC) ",
            duration: "2020-2022",
        },
        {
            instituition: "Assembly of Christ School",
            degree: "Secondary (ICSE)",
            duration: "2020",
        },
    ],
};

const skills = {
    title: "My skills",
    description: "Lorem dbzhjbdfvb vdvbjvdv vxbvvvmvjxk vxb,  xvbc, ",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html",
        },
        {
            icon: <FaCss3 />,
            name: "Css",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTypescript />,
            name: "typescript",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <RiNextjsFill />,
            name: "next.Js",
        },
        {
            icon: <SiKotlin />,
            name: "Kotlin",
        },
        {
            icon: <TbBrandReactNative />,
            name: "reactnative.dev",
        },
        {
            icon: <FaAndroid />,
            name: "Android Development",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="xl: flex flex-col gap-[60px] xl:flex-row"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="gap-[60px flex flex-col xl:flex-row">
                    <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="max-w-[300px] text-center text-xl lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.instituition}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </p>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="h-full w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                                                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="tetx-center w-full xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center gap-4 xl:justify-start"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
