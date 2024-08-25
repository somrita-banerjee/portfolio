"use client";

import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAndroid } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiKotlin } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

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
    ],
};

const Resume = () => {
    return <motion.div></motion.div>;
};

export default Resume;
