"use client";
import { masteredTechnologies } from "@/data/data";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import StackItem from "../StackItem/StackItem";

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
                {masteredTechnologies.map((technology, index) => {
                    return (
                        <StackItem
                            index={index}
                            technology={technology}
                            iconScale={iconScale}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default StackSection;