import { ArrowDown, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section id="home" className="container !justify-center bg-base-100 h-[90vh]">
            <div className="flex flex-col items-center justify-center w-full">
                <img
                    src="/juan-memoji-working.png"
                    className="max-w-32 md:max-w-44 rounded-lg" />
                <div className="flex justify-center items-center px-4 border-solid border-2 border-neutral-content rounded-md w-58">
                    <div className="h-4 w-4 animate-pulse rounded-full bg-green-400"></div>
                    <span className="px-2">{t("subtitle")}</span>
                </div>
                <div className="flex justify-center items-center flex-col mt-4 md:gap-10">
                    <h1 className="text-center w-full text-xl md:text-5xl font-bold font-serif">{t("title")}</h1>
                    <p className="my-10 w-full text-justify">
                        {t("description")}
                    </p>

                    <div className="flex w-auto items-center justify-center md:flex-wrap-reverse gap-2 flex-wrap">
                        <a
                            href="/cv.pdf"
                            download="CV_Fullstack_Dev_Juan_Restrepo_Compressed.pdf"
                            className="btn btn-sm btn-outline !w-60 md:w-44 flex rounded-lg mx-4"
                        >
                            {t("downloadCTA")}
                            <Download className="ml-2" />
                        </a>
                        <Link className="btn btn-sm btn-outline !w-60 mx-4 rounded-lg" href="#projects">
                            <span>{t("redirectCTA")}</span>
                            <ArrowDown className="animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;