"use client";
import { masteredTechnologies } from "@/data/data";
import getTechIcons from "@/lib/getTechIcons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const StackSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const iconScale = useTransform(scrollYProgress, [1, 0], [1, 1.5]);
    return (
        <section id="techstack" className="container md:min-h-screen">
            <SectionHeader
                title="Mes Technologies"
                description="These are the technologies I mastered"
            />
            <div ref={container} className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-10 mt-8">
                {masteredTechnologies.map((techString, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="flex flex-col justify-center items-center"
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                        >
                            <span className="py-1 mb-2 text-sm font-semibold">{techString}</span>
                            <motion.span style={{ scale: iconScale }} className="md:pt-4">
                                {getTechIcons({ technology: techString, className: "text-xl md:text-[60px]" })}
                            </motion.span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
};

export default StackSection;