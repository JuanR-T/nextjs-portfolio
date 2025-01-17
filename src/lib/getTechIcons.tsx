import { JSX } from "react";
import { FaAws } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import {
    SiApollographql,
    SiCss3,
    SiDaisyui,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiLinkedin,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedux,
    SiSass,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import GetTechIconProps from "./getTechIcons.types";

const getTechIcon = ({ technology, className }: GetTechIconProps) => {
    const icons: Record<string, JSX.Element> = {
        React: <SiReact className={`${className || "text-lg"} text-[#61DAFB]`} />,
        JavaScript: <SiJavascript className={`${className || "text-lg"} text-[#F7DF1E]`} />,
        HTML: <SiHtml5 className={`${className || "text-lg"} text-[#E34F26]`} />,
        CSS: <SiCss3 className={`${className || "text-lg"} text-[#1572B6]`} />,
        NodeJS: <SiNodedotjs className={`${className || "text-lg"} text-[#339933]`} />,
        SocketIO: <SiSocketdotio className={`${className || "text-lg"} text-[#010101]`} />,
        TailwindCSS: <SiTailwindcss className={`${className || "text-lg"} text-[#38BDF8]`} />,
        Apollo: <SiApollographql className={`${className || "text-lg"} text-[#010101]`} />,
        MongoDB: <SiMongodb className={`${className || "text-lg"} text-[#00684A]`} />,
        GraphQL: <SiGraphql className={`${className || "text-lg"} text-[#F6009C]`} />,
        NextJS: <SiNextdotjs className={`${className || "text-lg"} text-[#010101]`} />,
        Redux: <SiRedux className={`${className || "text-lg"} text-[#764ABC]`} />,
        Prisma: <SiPrisma className={`${className || "text-lg"} text-[#0C334C]`} />,
        PostgreSQL: <SiPostgresql className={`${className || "text-lg"} text-[#32648D]`} />,
        DaisyUI: <SiDaisyui className={`${className || "text-lg"} text-[#FF9903]`} />,
        MySQL: <SiMysql className={`${className || "text-lg"} text-[#015B85]`} />,
        PHP: <SiPhp className={`${className || "text-lg"} text-[#4F5B93]`} />,
        Jest: <SiJest className={`${className || "text-lg"} text-[#983E58]`} />,
        AWS: <FaAws className={`${className || "text-lg"} text-[#FF9900]`} />,
        Typescript: <SiTypescript className={`${className || "text-lg"} text-[#3178C6]`} />,
        SCSS: <SiSass className={`${className || "text-lg"} text-[#CC6699]`} />,
        Github: <SiGithub className={`${className || "text-lg"}`} />,
        Mail: <GrMailOption className={`${className || "text-lg"}`} />,
        LinkedIn: <SiLinkedin className={`${className || "text-lg"}`} />,
        Zustand: (
            <img
                src="/icons/zustand.svg"
                alt="zustand-logo"
                className={"w-5 h-5 md:w-14 md:h-14"}
            />
        ),
    };

    return icons[technology] || <span className="text-gray-500">?</span>
};

export default getTechIcon;