"use client";
import { useMessages, useTranslations } from "next-intl";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import SectionHeader from "../SectionHeader/SectionHeader";

const WorkExperience = () => {
    const t = useTranslations("Experiences");
    const messages = useMessages();
    const experiences = Object.keys(messages.Experiences).map(key => ({
        title: t(`${key}.title`),
        position: t(`${key}.position`),
        date: t(`${key}.date`),
        location: t(`${key}.location`),
        missions: t.raw(`${key}.missions`),
        link: t(`${key}.link`),
        stack: t.raw(`${key}.stack`)
    }));
    return (
        <section id="work-experience" className="container md:min-h-screen">
            <SectionHeader
                intlNamespace="ExperienceSection"
            />
            <div className="w-full mt-8">
                {experiences.map((experience, experienceIndex) => {
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