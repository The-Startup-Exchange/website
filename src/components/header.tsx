import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import NextImage from "next/image";
import SiteMenu from "./siteMenu";
import { useTheme } from '../context/ThemeContext';
import Images from '../assets/images';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  messina_semibold,
} from '../app/fonts';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className={`flex w-full justify-between items-center flex-row border-b pb-3.5 py-5 md:px-12 px-4 sticky top-0 z-50 ${theme === 'dark' ? 'bg-black text-white border-[#242424]' : 'bg-white text-black border-[#E0E0E0]'}`}>
                <div>
                    <Link href="/">
                        <NextImage
                            src={theme === 'dark' ? Images.sxFull : Images.sxFullBlack}
                            alt="SX Full Logo"
                            width={136}
                            height={27}
                            className="w-[55%] md:w-[80%] h-auto"
                        />
                    </Link>
                </div>
                {isMobile ? (
                    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <div className="cursor-pointer">
                                {menuOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={24} />}
                            </div>
                        </SheetTrigger>
                        <SheetContent side="top" className="bg-[#111111] w-full p-12 space-y-4">
                            <SiteMenu useBold={true} vertical={true} textAlign="text-left" />
                            <Button href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form" variant="dark" className="rounded-xl py-2 px-5 mt-4">
                                <div className={`${messina_semibold.className} text-[12px] md:text-normal tracking-tight`}>
                                    JOIN THE COMMUNITY
                                </div>
                            </Button>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <>
                        <SiteMenu useBold={true} />
                        <Button href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form" variant="dark" className="rounded-xl py-2 px-5">
                          <div className={`${messina_semibold.className} text-[12px] md:text-normal tracking-tight`}>
                            JOIN THE COMMUNITY
                          </div>
                        </Button>
                    </>
                )}
            </header>
        </>
    );
};

export default Header;