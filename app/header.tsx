"use client";

import { Button } from "@/components/ui/button";
import { messina_book, messina_semibold } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import SiteMenu from "../components/siteMenu";

export default function Header() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <header className="flex w-full justify-between align-center items-center flex-row border-[#242424] border-b pb-3.5 py-5 px-12 sticky top-0 z-50 bg-black">
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
          <SiteMenu useBold={true}/>
          <Button variant="secondary" className="rounded-xl py-3 px-5">
            <div className={`${messina_semibold.className} font-bold`}>
                JOIN THE COMMUNITY
            </div>
          </Button>
        </header>
      </>
    );
}