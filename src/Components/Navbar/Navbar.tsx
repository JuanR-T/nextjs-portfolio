import { contactData } from "@/data/data";
import getTechIcon from "@/lib/getTechIcons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
    const t = useTranslations("Navbar");
    return (
        <div className="px-2 sticky w-full md:w-[80%] top-0 z-50">
            <div className="p-4 lg:p-0 w-full relative rounded-2xl backdrop-blur-md flex justify-center items-center">
                <div className="lg:hidden absolute left-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm justify-start items-start dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="px-1"><Link className="btn btn-ghost" href="#home">{t("menu.home")}</Link></li>
                            <li className="px-1"><Link className="btn btn-ghost" href="#projects">Projets</Link></li>
                            <li className="px-1"><Link className="btn btn-ghost" href="#work-experience">Experiences</Link></li>
                            <li className="px-1"><Link className="btn btn-ghost" href="#techstack">Technologies</Link></li>
                            <li className="px-1">
                                <details className="px-0 dropdown btn btn-ghost">
                                    <summary className="text-left">Contact</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        {contactData.map((contact, index) => {
                                            return (
                                                <li>
                                                    <Link key={index} href={contact.link} className="" target="_blank">
                                                        {getTechIcon({ technology: contact.title, className: "text-2xl" })}
                                                        {contact.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:absolute lg:left-4 lg:w-32 ">
                    <Link className="flex items-center gap-x-1" href="https://github.com/JuanR-T" target="_blank">
                        {getTechIcon({ technology: "Github", className: "text-2xl" })}
                        <span className="px-1 hidden md:flex font-bold">JuanR-T</span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="px-1"><Link className="btn btn-ghost" href="#home">{t("menu.home")}</Link></li>
                        <li className="px-1"><Link className="btn btn-ghost" href="#projects">Projets</Link></li>
                        <li className="px-1"><Link className="btn btn-ghost" href="#work-experience">Experiences</Link></li>
                        <li className="px-1"><Link className="btn btn-ghost" href="#techstack">Technologies</Link></li>
                        <li className="px-1">
                            <div className="btn btn-ghost dropdown dropdown-bottom dropdown-hover flex">
                                Contact
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    {contactData.map((contact, index) => {
                                        return (
                                            <li>
                                                <Link key={index} href={contact.link} className="cursor-pointer" target="_blank">
                                                    {getTechIcon({ technology: contact.title, className: "text-2xl" })}
                                                    {contact.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="absolute right-4 flex justify-center">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}

export default Navbar;