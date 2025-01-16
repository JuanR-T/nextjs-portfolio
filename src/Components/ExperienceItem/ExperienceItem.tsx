"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiMapPin } from "react-icons/fi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import ExperienceItemProps from "./ExperienceItem.types";

const ExperienceItem = ({ title, position, date, location, missions, stack, link }: ExperienceItemProps) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex flex-col h-58 w-full border-b border-zinc-800 pb-9"
        >
            <div className="flex w-full h-16 justify-between mb-4">
                <div className="flex flex-col h-full justify-between">
                    <p className="mb-2.5 text-xl font-medium font-serif">{title} - {position}</p>
                    <p className="text-sm uppercase font-medium">{date}</p>
                </div>
                <div className="flex flex-col justify-between h-full items-start text-sm uppercase">
                    <div className="flex items-center gap-1.5">
                        <p className="font-medium">{location}</p>
                        <FiMapPin className="text-lg text-[#c92d28]" />
                    </div>
                    <div className="text-sm p-0">
                        <a href={link} target="_blank" className="flex font-medium justify-center items-center ">
                            Voir le site
                            <ArrowUpRight className="px-1" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="flex h-full w-full justify-between">
                <div>
                    <ul className="">
                        {missions.map((mission, index) => (
                            <li key={index} className="text-sm flex items-center gap-1.5"><TfiArrowCircleRight className="text-lg text-[#8a24b2]" /> {mission}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap items-end justify-end w-[49%]">
                    {stack.map((tech, index) => (
                        <span key={index} className="badge badge-md mr-1">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceItem;