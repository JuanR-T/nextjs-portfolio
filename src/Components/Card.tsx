import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";
import { SiApollographql, SiCss3, SiDaisyui, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiRedux, SiSocketdotio, SiTailwindcss } from "react-icons/si";


type CardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    prodLink: string;
    repositoryLink: string;
    technologies: string[];
}

const techIcons: Record<string, JSX.Element> = {
    React: <SiReact className="text-lg text-[#61DAFB]" />,
    JavaScript: <SiJavascript className="text-lg text-[#F7DF1E]" />,
    HTML: <SiHtml5 className="text-lg text-[#E34F26]" />,
    CSS: <SiCss3 className="text-lg text-[#1572B6]" />,
    NodeJS: <SiNodedotjs className="text-lg text-[#339933]" />,
    SocketIO: <SiSocketdotio className="text-lg text-[#010101]" />,
    TailwindCSS: <SiTailwindcss className="text-lg text-[#38BDF8]" />,
    ApolloGraphQL: <SiApollographql className="text-lg text-[#010101]" />,
    MongoDB: <SiMongodb className="text-lg text-[#00684A]" />,
    GraphQL: <SiGraphql className="text-lg text-[#F6009C]" />,
    NextJS: <SiNextdotjs className="text-lg text-[#010101]" />,
    Redux: <SiRedux className="text-lg text-[#764ABC]" />,
    Prisma: <SiPrisma className="text-lg text-[#0C334C]" />,
    PostgreSQL: <SiPostgresql className="text-lg text-[#32648D]" />,
    DaisyUI: <SiDaisyui className="text-lg text-[#FF9903]" />,
    Zustand: <img src="/icons/zustand.svg" alt="zustand-logo" className="w-6 h-6" />,
};

const Card = ({ id, title, description, image, prodLink, repositoryLink, technologies }: CardProps) => {
    return (
        <div key={id} className="text-center md:text-left border-solid grid md:grid-cols-2 grid-cols-1 rounded-lg md:h-96 h-[100vh] w-full overflow-hidden shadow-2xl px-4 relative">
            <div className="flex justify-between h-full">
                <div className="p-4 flex flex-col w-full justify-between">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-row justify-between">
                        <div className="flex w-30 justify-between rounded-xl cursor-pointer font-semibold p-2 transition hover:duration-300 hover:text-white hover:bg-slate-400">
                            <a href={prodLink} target="_blank" className="flex ">
                                Voir le projet
                            </a>
                            <ArrowUpRight className="px-1" />
                        </div>
                        <div className="flex w-30 justify-between rounded-xl cursor-pointer font-semibold p-2 transition hover:duration-300 hover:text-white hover:bg-slate-400">
                            <a href={repositoryLink} target="_blank" className="">Voir le code</a>
                            <ArrowUpRight className="px-1" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-2">
                        {technologies.map((technology) => (
                            <div key={technology} className="flex items-center gap-1">
                                <span className="badge">{technology}</span>
                                {techIcons[technology] || <span className="text-gray-500">?</span>} {/* Fallback for unknown tech */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-full mt-10 w-full border-solid rounded-t-lg border-2 border-neutral relative">
                <Image src={image} alt={title} className="rounded-t-lg object-cover" fill={true} />
            </div>
        </div>
    )
}

export default Card;