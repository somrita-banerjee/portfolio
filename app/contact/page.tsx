"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { FaEnvelope, FaMapMarkerAlt, FaSpinner, FaPaperPlane } from "react-icons/fa";
import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";

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

const inquiryOptions: { [key: string]: string } = {
    job: "Full-time Engineering Role",
    internship: "Software Internship",
    freelance: "Project / Freelance",
    other: "General Discussion",
};

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        inquiry: "job",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, inquiry: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.firstname.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus("error");
            setStatusMessage("Please fill in all required fields (Firstname, Email, and Message).");
            return;
        }

        setStatus("submitting");
        setStatusMessage("");

        const fullName = `${formData.firstname.trim()} ${formData.lastname.trim()}`.trim();
        const inquiryLabel = inquiryOptions[formData.inquiry] || "General Inquiry";

        try {
            const response = await fetch("https://formsubmit.co/ajax/7vrveflhx@mozmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    email: formData.email,
                    phone: formData.phone || "Not provided",
                    inquiry: inquiryLabel,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `New Portfolio Message from ${fullName} [${inquiryLabel}]`,
                    _template: "table",
                    _captcha: "false",
                }),
            });

            const data = await response.json();

            if (response.ok || data.success === "true" || data.success === true) {
                setStatus("success");
                setStatusMessage(
                    "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
                );
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    inquiry: "job",
                    message: "",
                });
            } else {
                setStatus("error");
                setStatusMessage(
                    data.message || "Failed to send message. Please try again or email directly.",
                );
            }
        } catch (error) {
            setStatus("error");
            setStatusMessage(
                "An unexpected error occurred while sending your message. Please email directly at 7vrveflhx@mozmail.com.",
            );
        }
    };

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
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-[#232329] p-8"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-accent">
                                    Let&apos;s connect
                                </h3>
                                <p className="mt-2 text-sm text-white/60">
                                    Interested in discussing a full-time software engineering role,
                                    internship opportunity, or technical collaboration? Send a
                                    message below.
                                </p>
                            </div>

                            <AnimatePresence mode="wait">
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-accent"
                                    >
                                        <BsCheckCircleFill className="mt-0.5 shrink-0 text-xl" />
                                        <div className="flex-1">
                                            <p className="font-semibold">Message Delivered!</p>
                                            <p className="mt-1 text-xs text-white/80">
                                                {statusMessage}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-400"
                                    >
                                        <BsExclamationTriangleFill className="mt-0.5 shrink-0 text-xl" />
                                        <div className="flex-1">
                                            <p className="font-semibold">Unable to Send</p>
                                            <p className="mt-1 text-xs text-white/80">
                                                {statusMessage}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname *"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "submitting"}
                                />
                                <Input
                                    type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    disabled={status === "submitting"}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "submitting"}
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number (optional)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={status === "submitting"}
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Inquiry Topic
                                </label>
                                <Select
                                    value={formData.inquiry}
                                    onValueChange={handleSelectChange}
                                    disabled={status === "submitting"}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select topic / inquiry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
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
                                            <SelectItem value="other">
                                                General Discussion
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                                    Your Message *
                                </label>
                                <Textarea
                                    name="message"
                                    className="min-h-[140px]"
                                    placeholder="Type your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "submitting"}
                                />
                            </div>

                            <Button
                                type="submit"
                                size="md"
                                disabled={status === "submitting"}
                                className="inline-flex items-center justify-center gap-2 bg-accent py-3 font-bold uppercase text-primary transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <FaSpinner className="animate-spin text-base" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="text-sm" />
                                        <span>Send message</span>
                                    </>
                                )}
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
