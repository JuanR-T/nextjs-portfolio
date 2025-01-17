"use client";
import { portfolioExperiences } from "@/data/data";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import SectionHeader from "../SectionHeader/SectionHeader";

const WorkExperience = () => {
    return (
        <section id="work-experience" className="container md:min-h-screen">
            <SectionHeader
                title="Experiences"
                description="With experience in fullstack software engineering, I have contributed to building scalable web applications, integrating modern technologies, and delivering impactful solutions"
            />
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