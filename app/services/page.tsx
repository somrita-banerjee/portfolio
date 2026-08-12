"use client";

import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Full Stack Web Development",
        description:
            "Building responsive, modern end-to-end web applications with Next.js, React, Node.js, and clean architecture.",
    },
    {
        num: "02",
        title: "Frontend Engineering",
        description:
            "Designing pixel-perfect, accessible, and high-performance UI components using TypeScript, React, and Tailwind CSS.",
    },
    {
        num: "03",
        title: "Backend & API Development",
        description:
            "Architecting scalable RESTful APIs and microservices using Node.js, Express, NestJS, and Django with robust security.",
    },
    {
        num: "04",
        title: "Mobile App Development",
        description:
            "Developing cross-platform and native mobile applications with React Native, Kotlin, and Android Studio.",
    },
    {
        num: "05",
        title: "Database Management",
        description:
            "Designing optimized relational and document databases with PostgreSQL, MongoDB, and MySQL.",
    },
    {
        num: "06",
        title: "UI/UX Design",
        description:
            "Translating complex requirements into intuitive user journeys, wireframes, and interactive Figma prototypes.",
    },
];

const Services = () => {
    return (
        <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-1 flex-col justify-center gap-4"
                            >
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                                        {service.num}
                                    </div>
                                </div>
                                <h2 className="text-[36px] font-bold leading-tight text-white transition-all duration-500 group-hover:text-accent">
                                    {service.title}
                                </h2>
                                <p className="text-sm leading-relaxed text-white/70">
                                    {service.description}
                                </p>
                                <div className="w-full border-b border-white/20 pt-2"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
