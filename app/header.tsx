"use client";

import { Button } from "@/components/ui/button";
import { messina_mono_sans } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";

export default function Header() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <header className="flex w-full justify-between flex-row border-dashed border-[#414141] border-b-2 pb-4 px-16">
          <div>
            <NextImage
                src="/sx-full-logo.png"
                alt="SX Full Logo"
                width={200}
                height={200}
                />
            </div>
            <div className="flex flex-row gap-x-4 items-center">
                <h2 className={`${messina_mono_sans.className}`}>EVENTS</h2>
                <h2 className={`${messina_mono_sans.className}`}>PARTNERS</h2>
                <h2 className={`${messina_mono_sans.className}`}>FAQs</h2>
                <h2 className={`${messina_mono_sans.className}`}>DONATE</h2>
                <h2 className={`${messina_mono_sans.className}`}>ABOUT</h2>
          </div>            
          <Button variant="secondary" className="rounded-full p-6">
            <div className={`${messina_mono_sans.className}`}>
                BRING THIS TO YOUR CAMPUS
            </div>
          </Button>
        </header>
      </>
    );
}