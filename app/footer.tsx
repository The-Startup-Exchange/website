"use client";

import { Button } from "@/components/ui/button";
import { messinaBook } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import NextLink from "next/link";

export default function Footer() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <footer className="flex w-full justify-center mx-auto flex-row border-dashed border-[#414141] border-t-2 py-7 px-16 space-x-4">
            <div className={`${messinaBook.className} flex flex-row gap-x-4 text-gray-400 tracking-tight items-center`}>
                © 2024 STARTUP EXCHANGE. ALL RIGHTS RESERVED
            </div> 
            <div className="flex space-x-3.5 flex-row">
                <NextLink href={"/"}>
                    <NextImage
                        src="/discord.png"
                        alt="Discord Logo"
                        width={19}
                        height={19}
                    />
                </NextLink>
                <NextLink href={"/"}>
                    <NextImage
                        src="/appstore.png"
                        alt="Discord Logo"
                        width={19}
                        height={19}
                    />
                </NextLink>
                <NextLink href={"/"}>
                    <NextImage
                        src="/twitter.png"
                        alt="Discord Logo"
                        width={19}
                        height={19}
                    />
                </NextLink>
                <NextLink href={"/"}>
                    <NextImage
                        src="/instagram.png"
                        alt="Discord Logo"
                        width={19}
                        height={19}
                    />
                </NextLink>
            </div>           

        </footer>
      </>
    );
}