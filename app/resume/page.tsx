"use client";

import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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

const Resume = () => {
    return <div>resume page</div>;
};

export default Resume;
