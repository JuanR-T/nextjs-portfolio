"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiMapPin } from "react-icons/fi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import ExperienceItemProps from "./ExperienceItem.types";

const ExperienceItem = ({ title, position, date, location, missions, stack, link }: ExperienceItemProps) => {
    return (
        <motion.div
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.85 }}
            className="mb-9 flex flex-col h-96 md:h-48 w-full border-b border-zinc-800 pb-9"
        >
            <div className="flex flex-col items-center md:flex-row w-full h-16 justify-between mb-4">
                <div className="flex flex-col h-full">
                    <p className="mb-2 text-md md:text-xl font-bold font-serif">{title} - {position}</p>
                    <p className="text-sm uppercase font-medium text-center md:text-left">{date}</p>
                </div>
                <div className="flex w-full pt-1 md:w-36 md:flex-col justify-between h-full items-end text-sm">
                    <div className="flex items-center gap-1.5">
                        <p className="font-medium">{location}</p>
                        <FiMapPin className="text-lg text-[#c92d28]" />
                    </div>
                    <div className="text-sm">
                        <a href={link} target="_blank" className="flex font-medium justify-center items-center ">
                            Voir le site
                            <ArrowUpRight className="px-1" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex h-full mt-2 md:mt-0 flex-col md:flex-row w-full justify-between">
                <div className="h-full flex flex-col">
                    <ul className="h-full py-10 md:py-0 flex flex-col justify-evenly md:justify-normal">
                        {missions.map((mission, index) => (
                            <li key={index} className="text-sm flex items-center md:items-center gap-1.5"><TfiArrowCircleRight className="shrink-0" /> {mission}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap items-end justify-center md:justify-end md:w-[49%]">
                    {stack.map((tech, index) => (
                        <span key={index} className="badge badge-md mr-1">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceItem;