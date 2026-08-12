"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "7vrveflhx@mozmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Kolkata, West Bengal, India",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="flex min-h-[80vh] flex-col justify-center py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-[30px] xl:flex-row">
                    {/* Form */}
                    <div className="order-2 xl:order-none xl:w-[54%]">
                        <form className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-[#232329] p-8">
                            <h3 className="text-3xl font-bold text-accent">Let&apos;s connect</h3>
                            <p className="text-sm text-white/60">
                                Interested in discussing a full-time software engineering role,
                                internship opportunity, or technical collaboration? Send a message
                                below.
                            </p>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select topic / inquiry" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectGroup >
                                        <SelectLabel>Inquiry Type</SelectLabel>
                                        <SelectItem value="job">
                                            Full-time Engineering Role
                                        </SelectItem>
                                        <SelectItem value="internship">
                                            Software Internship
                                        </SelectItem>
                                        <SelectItem value="freelance">
                                            Project / Freelance
                                        </SelectItem>
                                        <SelectItem value="other">General Discussion</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                className="h-[150px]"
                                placeholder="Type your message here..."
                            />

                            <Button
                                size="md"
                                className="max-w-40 bg-accent py-3 font-bold uppercase text-primary hover:bg-accent-hover"
                            >
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
                        <ul className="flex flex-col gap-8">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-white/5 bg-[#232329] text-xl text-accent xl:h-[72px] xl:w-[72px] xl:text-2xl">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs uppercase tracking-wider text-white/60">
                                                {item.title}
                                            </p>
                                            <h4 className="text-lg font-semibold text-white">
                                                {item.description}
                                            </h4>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
