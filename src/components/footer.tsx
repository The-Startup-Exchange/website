"use client";

import { messina_book } from "../app/fonts";
import { useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import Image from "next/image";
import Images from "../assets/images";
import Link from "next/link";

const socialLinks = [
    {
        href: "https://discord.gg/6nXvx6fG6V",
        src: Images.discord,
        blackSrc: Images.discordBlack,
        alt: "Discord Logo"
    },
    {
        href: "https://www.linkedin.com/company/thestartupexchange",
        src: Images.linkedin,
        blackSrc: Images.linkedinBlack,
        alt: "Linkedin Logo"
    },
    {
        href: "https://x.com/startupxchange",
        src: Images.twitter,
        blackSrc: Images.twitterBlack,
        alt: "Twitter Logo"
    },
    {
        href: "https://www.instagram.com/startupexchange",
        src: Images.instagram,
        blackSrc: Images.instagramBlack,
        alt: "Instagram Logo"
    },
]

export default function Footer() {
    const navRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <footer className={`flex w-full justify-center mx-auto flex-row border-dashed border-t py-7 px-2 md:px-16 space-x-4 ${theme === 'dark' ? 'text-[#A1A1A1] bg-black border-[#414141]' : 'text-black bg-white border-[#E0E0E0]'}`}>
            <div className={`${messina_book.className} text-[12px] md:text-[16px] flex flex-row gap-x-4 tracking-tight items-center`}>
                © 2024 STARTUP EXCHANGE. ALL RIGHTS RESERVED
            </div> 
            <div className="flex space-x-1.5 md:space-x-3.5 flex-row items-center">
                {socialLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="opacity-70 hover:opacity-100 transition duration-500">
                        <Image
                            src={theme === 'dark' ? link.src : link.blackSrc}
                            alt={link.alt}
                            width={17}
                            height={17}
                            className="w-[70%] h-auto md:w-[80%]"
                        />
                    </Link>
                ))}
            </div>           

        </footer>
      </>
    );
}