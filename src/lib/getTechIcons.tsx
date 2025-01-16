import { JSX } from "react";
import { SiApollographql, SiCss3, SiDaisyui, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiRedux, SiSocketdotio, SiTailwindcss } from "react-icons/si";

const getTechIcons: Record<string, JSX.Element> = {
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
    Zustand: (
        <img src="/icons/zustand.svg" alt="zustand-logo" className="w-6 h-6" />
    ),
};

export default getTechIcons;