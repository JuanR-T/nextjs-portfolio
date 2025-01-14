import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="sticky w-[80%] top-0 z-50">
            <div className="navbar px-4 relative rounded-2xl backdrop-blur-md">
                <div className="navbar-start">
                    <Link className="flex justify-between" href="https://github.com/JuanR-T" target="_blank">
                        <Image src="/github.svg" alt="github-logo" width={25} height={25} className="rounded-full" />
                        <span className="px-1 font-bold">JuanR-T</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#techstack">Technologies</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#techstack">Technologies</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar;