"use client";

import { messina_book } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        href: "https://discord.gg/6nXvx6fG6V",
        src: "/icons/discord.png",
        alt: "Discord Logo"
    },
    {
        href: "https://www.linkedin.com/company/thestartupexchange",
        src: "/icons/linkedin.png",
        alt: "Linkedin Logo"
    },
    {
        href: "https://x.com/startupxchange",
        src: "/icons/twitter.png",
        alt: "Twitter Logo"
    },
    {
        href: "https://www.instagram.com/startupexchange",
        src: "/icons/instagram.png",
        alt: "Instagram Logo"
    },
]

export default function Footer() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <footer className="flex w-full justify-center mx-auto flex-row border-dashed border-[#414141] border-t py-7 px-16 space-x-4">
            <div className={`${messina_book.className} flex flex-row gap-x-4 text-[#A1A1A1] tracking-tight items-center`}>
                © 2024 STARTUP EXCHANGE. ALL RIGHTS RESERVED
            </div> 
            <div className="flex space-x-3.5 flex-row items-center">
                {socialLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="opacity-70 hover:opacity-100 transition duration-500">
                        <NextImage
                            src={link.src}
                            alt={link.alt}
                            width={19}
                            height={19}
                        />
                    </Link>
                ))}
            </div>           

        </footer>
      </>
    );
}