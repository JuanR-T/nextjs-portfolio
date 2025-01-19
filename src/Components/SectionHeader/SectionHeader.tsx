"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeaderProps from "./SectionHeader.types";

const SectionHeader = ({ intlNamespace }: SectionHeaderProps) => {
    const t = useTranslations(intlNamespace);
    return (
        <>
            <motion.h2
                className="section-title"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {t("title")}
            </motion.h2>
            <motion.p
                className="section-description"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {t("description")}
            </motion.p>
        </>
    )
}

export default SectionHeader