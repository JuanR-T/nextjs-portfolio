import Image from "next/image";
import Link from "next/link";

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="sticky w-[80%] top-0 z-50 bg-red-300">
            <div className="navbar relative rounded-2xl bg-red-300">
                <div className="navbar-start">
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
                            <li><a href="#Contact">À propos</a></li>
                            <li><a href="#">Projets</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <Image src="/juan-photo.jpg" alt="juan-photo" width={30} height={30} className="rounded-full" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#Contact">À propos</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn" href="https://github.com/JuanR-T" target="_blank">
                        <Image src="/github.svg" alt="github-logo" width={20} height={20} className="rounded-full" />
                        Github
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;