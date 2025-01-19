"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import getTechIcons from "../../lib/getTechIcons";
import CardProps from "./Card.types";

const Card = ({ id, title, description, image, prodLink, repositoryLink, technologies, progress, range, targetScale }: CardProps) => {
    const t = useTranslations("ProjectsSection");
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
                                {t("Card.prodLinkCTA")}
                                <ArrowUpRight className="px-1" />
                            </a>
                        </div>
                        <div className="btn btn-ghost cursor-pointer p-2 pl-3">
                            <a className="flex justify-center items-center" href={repositoryLink} target="_blank">
                                {t("Card.repositoryLinkCTA")}
                                <ArrowUpRight className="px-1" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-start gap-3">
                        {technologies.map((techString, index) => (
                            <div key={index} className="tooltip flex cursor-pointer items-center gap-1" data-tip={techString}>
                                {getTechIcons({ technology: techString, className: "w-10 h-10" })}
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