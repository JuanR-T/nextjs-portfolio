import { contactData } from "@/data/data";
import getTechIcon from "@/lib/getTechIcons";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section id="footer" className="container">
            <div className="w-full border-t-2 border-neutral py-10">
                <div className="flex justify-between items-center w-full">
                    <p>{currentYear} © All rights reserved</p>
                    <div className="flex justify-center items-center gap-x-10">
                        {contactData.map((contact, index) => {
                            return (
                                <Link key={index} href={contact.link} className="tooltip" data-tip={contact.title} target="_blank">
                                    {getTechIcon({ technology: contact.title, className: "text-2xl" })}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;