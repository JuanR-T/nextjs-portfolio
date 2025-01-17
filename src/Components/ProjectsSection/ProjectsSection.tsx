"use client";
import { portfolioProjects } from "@/data/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // useEffect(() => {
    //     const lenis = new Lenis({
    //         autoRaf: true,
    //         duration: 0.5,
    //         easing: (t) => t ** 0.1,
    //         smoothWheel: true,
    //     });

    //     function raf(time: any) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);

    //     return () => lenis.destroy();
    // }, []);

    return (
        <section id="projects" className="container md:min-h-screen">
            <SectionHeader
                title="Mes Projets"
                description="Explore a collection of personal projects crafted to deepen my expertise, experiment with new technologies, and bring creative ideas to life."
            />
            <div ref={container} key={1} className="relative grid md:grid-cols-1 sm:grid-cols-1 gap-6 h-full w-full mt-8">
                {portfolioProjects.map((project, projectIndex) => {
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

export default Projects;