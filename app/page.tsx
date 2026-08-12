import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div className="order-2 text-center xl:order-none xl:text-left">
                        <span className="font-mono mb-2 block text-sm uppercase tracking-wider text-accent">
                            Full Stack Developer & CSE Student
                        </span>
                        <h1 className="h1 mb-4">
                            Hello I&apos;m
                            <br /> <span className="text-accent">Somrita Banerjee</span>
                        </h1>
                        <h2 className="mb-6 text-xl font-medium text-white/90">
                            Building Scalable Web Apps & Digital Solutions
                        </h2>
                        <p className="mb-9 max-w-[520px] text-sm leading-relaxed text-white/80 md:text-base">
                            Final-year Computer Science Engineering student passionate about
                            crafting performant full-stack web applications, clean API
                            architectures, and intuitive user experiences.
                        </p>
                        <div className="flex flex-col items-center gap-6 xl:flex-row">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2 uppercase"
                                asChild
                            >
                                <a
                                    href="/assets/CVSomritaBanerjee.pdf"
                                    download="CVSomritaBanerjee.pdf"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl" />
                                </a>
                            </Button>

                            <Link href="/projects">
                                <Button
                                    size="lg"
                                    className="flex items-center gap-2 bg-accent font-bold uppercase text-primary hover:bg-accent-hover"
                                >
                                    <span>View Projects</span>
                                    <span className="text-lg">→</span>
                                </Button>
                            </Link>

                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-4"
                                    iconstyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 mb-8 xl:order-none xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;
