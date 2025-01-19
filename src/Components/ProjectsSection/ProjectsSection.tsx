"use client";
import { useScroll } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";
import { portfolioProjects } from "../../data/data";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";

const ProjectsSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const t = useTranslations("Projects");
    const messages = useMessages();
    const projectKeys = Object.keys(messages.Projects);
    const projects = projectKeys.map(key => ({
        title: t(`${key}.title`),
        description: t(`${key}.description`),
        image: t(`${key}.image`),
        prodLink: t(`${key}.prodLink`),
        repositoryLink: t(`${key}.repositoryLink`),
        technologies: t.raw(`${key}.technologies`),
    }));

    return (
        <section id="projects" className="container md:min-h-screen">
            <SectionHeader
                intlNamespace="ProjectsSection"
            />
            <div ref={container} key={1} className="relative grid md:grid-cols-1 sm:grid-cols-1 gap-6 h-full w-full mt-8">
                {projects.map((project: any, projectIndex: any) => {
                    const targetScale = 1 - ((portfolioProjects.length - projectIndex)) * 0.05;
                    return (
                        <Card
                            key={projectIndex}
                            id={projectIndex}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            prodLink={project.prodLink}
                            repositoryLink={project.repositoryLink}
                            technologies={project.technologies}
                            range={[projectIndex * 0.25, 1]}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                        />
                    )
                })}
            </div>
        </section>

    )
}

export default ProjectsSection;