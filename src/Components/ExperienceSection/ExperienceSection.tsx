"use client";
import { portfolioExperiences } from "@/data/data";
import { motion } from "framer-motion";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const WorkExperience = () => {
    return (
        <section id="work-experience" className="container md:min-h-screen">
            <motion.h2
                className="section-title"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                Experiences
            </motion.h2>
            <motion.p
                className="section-description"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                With experience in fullstack software engineering, I have contributed to building scalable web applications, integrating modern technologies, and delivering impactful solutions
            </motion.p>
            <div className="w-full mt-8">
                {portfolioExperiences.map((experience, experienceIndex) => {
                    return (
                        <ExperienceItem
                            key={experienceIndex}
                            title={experience.title}
                            position={experience.position}
                            stack={experience.stack}
                            missions={experience.missions}
                            date={experience.date}
                            location={experience.location}
                            link={experience.link}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default WorkExperience;