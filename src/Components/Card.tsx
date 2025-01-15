"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { JSX, useRef } from "react";
import { SiApollographql, SiCss3, SiDaisyui, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiRedux, SiSocketdotio, SiTailwindcss } from "react-icons/si";
type CardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    prodLink: string;
    repositoryLink: string;
    technologies: string[];
    range?: any;
    targetScale?: number;
    progress?: any;
}

const techIcons: Record<string, JSX.Element> = {
    React: <SiReact className="text-lg text-[#61DAFB]" />,
    JavaScript: <SiJavascript className="text-lg text-[#F7DF1E]" />,
    HTML: <SiHtml5 className="text-lg text-[#E34F26]" />,
    CSS: <SiCss3 className="text-lg text-[#1572B6]" />,
    NodeJS: <SiNodedotjs className="text-lg text-[#339933]" />,
    SocketIO: <SiSocketdotio className="text-lg text-[#010101]" />,
    TailwindCSS: <SiTailwindcss className="text-lg text-[#38BDF8]" />,
    ApolloGraphQL: <SiApollographql className="text-lg text-[#010101]" />,
    MongoDB: <SiMongodb className="text-lg text-[#00684A]" />,
    GraphQL: <SiGraphql className="text-lg text-[#F6009C]" />,
    NextJS: <SiNextdotjs className="text-lg text-[#010101]" />,
    Redux: <SiRedux className="text-lg text-[#764ABC]" />,
    Prisma: <SiPrisma className="text-lg text-[#0C334C]" />,
    PostgreSQL: <SiPostgresql className="text-lg text-[#32648D]" />,
    DaisyUI: <SiDaisyui className="text-lg text-[#FF9903]" />,
    Zustand: <img src="/icons/zustand.svg" alt="zustand-logo" className="w-6 h-6" />,
};

const Card = ({ id, title, description, image, prodLink, repositoryLink, technologies, progress, range, targetScale }: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <motion.div
            ref={container}
            key={id}
            className="gap-4 sticky top-20 text-center bg-base-100 md:text-left border-solid border-2 border-base-300 grid md:grid-cols-2 grid-cols-1 rounded-lg h-96 w-full overflow-hidden shadow-t-md md:px-4"
            style={{ scale, top: `calc(64px + ${id * 40}px)` }}
        >
            <div className="flex justify-between h-full">
                <div className="p-4 flex flex-col w-full justify-between">
                    <h2 className="md:text-2xl font-bold font-serif">{title}</h2>
                    <p className="text-sm md:text-md lg:text-lg">{description}</p>
                    <div className="flex flex-row justify-between">
                        <div className="btn btn-ghost cursor-pointer p-2 pl-3">
                            <a href={prodLink} target="_blank" className="flex justify-center items-center ">
                                Voir le projet
                                <ArrowUpRight className="px-1" />
                            </a>
                        </div>
                        <div className="btn btn-ghost cursor-pointer p-2 pl-3">
                            <a className="flex justify-center items-center" href={repositoryLink} target="_blank">
                                Voir le code
                                <ArrowUpRight className="px-1" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-2">
                        {technologies.map((technology) => (
                            <div key={technology} className="flex items-center gap-1">
                                <span className="badge text-sm">{technology}</span>
                                {techIcons[technology] || <span className="text-gray-500">?</span>} {/* Fallback for unknown tech */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="hidden md:flex h-full w-[100%] md:mt-16 border-solid border-8 border-base-300 overflow-hidden relative rounded-t-lg">
                <motion.div style={{ scale: imageScale }} className="h-full w-full">
                    <Image src={image} alt={title} className="rounded-t-lg object-cover" fill={true} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card;