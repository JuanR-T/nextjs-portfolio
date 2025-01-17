"use client";
import getTechIcons from "@/lib/getTechIcons";
import { motion } from "framer-motion";
import StackItemProps from "./StackItem.types";

const StackItem = ({ index, technology, iconScale }: StackItemProps) => {
    return (
        <>
            <motion.div
                key={index}
                className="flex flex-col justify-center items-center"
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                <span className="py-1 mb-2 text-sm font-semibold">{technology}</span>
                <motion.span style={{ scale: iconScale }} className="md:pt-4">
                    {getTechIcons({ technology, className: "w-6 h-6 md:w-14 h-14" })}
                </motion.span>
            </motion.div>
        </>
    )
}

export default StackItem