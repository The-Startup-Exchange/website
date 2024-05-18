"use client";

import { Button } from "@/components/ui/button";
import { messina_book, messina_semibold } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import SiteMenu from "../components/siteMenu";
import { useTheme } from '../context/ThemeContext';
import Images from '../assets/images';

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <header className={`flex w-full justify-between align-center items-center flex-row border-b pb-3.5 py-5 px-12 sticky top-0 z-50 ${theme === 'dark' ? 'bg-black text-white border-[#242424]' : 'bg-white text-black border-[#E0E0E0]'}`}>
          <div>
            <Link href="/">
              <NextImage
                  src={Images.sx_full_logo}
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
};

export default Header;