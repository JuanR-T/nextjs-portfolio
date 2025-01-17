"use client";
import { motion } from "framer-motion";
import SectionHeaderProps from "./SectionHeader.types";

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <>
            <motion.h2
                className="section-title"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="section-description"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {description}
            </motion.p>
        </>
    )
}

export default SectionHeader