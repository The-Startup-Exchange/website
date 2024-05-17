"use client";

import { Button } from "@/components/ui/button";
import { messina_book, messina_semibold } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";

const navItems = [
  {
    name: "COMMUNITY",
    link: "/community",
  },
  {
    name: "CHAPTERS",
    link: "/chapters",
  },
  {
    name: "EVENTS",
    link: "/events",
  },
  {
    name: "DONATE",
    link: "/donate",
  },
  {
    name: "BLOG",
    link: "/blog",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
];

export default function Header() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <header className="flex w-full justify-between align-center items-center flex-row border-[#242424] border-b pb-3.5 py-5 px-12">
          <div>
            <Link href="/">
              <NextImage
                  src="/sx-full-logo.png"
                  alt="SX Full Logo"
                  width={136}
                  height={27}
                  />
            </Link>
            </div>
            <div className="flex flex-row space-x-8 items-center">
              {navItems.map((item) => (
                <Link href={item.link}>
                  <h2 className={`${messina_book.className} text-[15px] transition duration-500 hover:text-[#414141]`}>{item.name}</h2>
                </Link>
              ))}
          </div>            
          <Button variant="secondary" className="rounded-xl py-3 px-5">
            <div className={`${messina_semibold.className} font-bold`}>
                JOIN THE COMMUNITY
            </div>
          </Button>
        </header>
      </>
    );
}