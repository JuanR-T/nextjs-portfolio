import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="container bg-base-100 min-h-screen ">
            <div className="flex flex-col items-center justify-center w-full">
                <img
                    src="/juan-memoji-working.png"
                    className="max-w-32 md:max-w-44 rounded-lg" />
                <div className="flex justify-center items-center px-4 border-solid border-2 border-neutral-content rounded-md w-58">
                    <div className="h-4 w-4 animate-pulse rounded-full bg-green-400"></div>
                    <span className="px-2">En recherche d'emploi</span>
                </div>
                <div className="flex md:w-[85%] lg:w-[75%] justify-center items-center flex-col mt-4 md:gap-16">
                    <h1 className="text-center w-full text-xl md:text-5xl font-bold font-serif">Développeur Fullstack Javascript</h1>
                    <p className="my-10 w-full text-justify">
                        Je suis un développeur fullstack passionné par la technologie et le design. J'aime créer des applications web et mobiles qui ont un impact positif sur les gens.
                        <br />
                        <br />
                        Je suis également un grand fan de la culture pop et des jeux vidéo. Si vous avez un projet ou une idée que vous aimeriez concrétiser, n'hésitez pas à me contacter.
                    </p>

                    <div className="flex w-auto items-center justify-center md:flex-wrap-reverse gap-2 flex-wrap">
                        <button className="btn btn-sm btn-outline !w-52 md:w-44 flex rounded-lg mx-4">
                            Télécharger mon CV
                            <Download className="" />
                        </button>
                        <Link className="btn btn-sm btn-outline !w-52 mx-4 rounded-lg" href="#projects">
                            <span className="font-bold">Voir mon travail</span>
                            <ArrowDown className="animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;