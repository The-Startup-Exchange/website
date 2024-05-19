"use client";

import Link from "next/link";
import { useTheme } from '../../context/ThemeContext'; // Adjust the path as necessary
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_regular
} from '../../app/fonts';
import { Badge, badgeVariants } from "@/components/ui/badge";
import Image from "next/image";
import Images from '../../assets/images';

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`flex flex-col w-[94%] ${theme === 'dark' ? 'bg-black' : 'bg-white'} text-${theme === 'dark' ? 'white' : 'black'}`}>
            <div className="h-[40rem] z-[-1] w-3/4 bg-black bg-grid-large-white/[0.1] flex items-center justify-center absolute bottom-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
            </div>
            <div className={`flex flex-col py-56 px-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x items-start justify-center gap-y-4`}>
                <div className="flex flex-col w-full gap-y-4">
                    <button onClick={toggleTheme} className={`p-2 m-2 border absolute right-14 top-20 rounded-lg ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'}`}>
                        {theme === 'dark' ? (
                            <Image src={Images.darkMode} alt="Light Mode" width={18} height={18} />
                        ) : (
                            <Image src={Images.lightMode} alt="Dark Mode" width={18} height={18} />
                        )}
                    </button>
                    <div className="flex flex-col w-full items-start justify-start lg:space-y-4 space-y-0">
                        <Link href="https://docs.google.com/forms/d/1K4TKHANO3iWyFM51OqRXBqT1wP2FTYEjE1pdz6559Y0/viewform?edit_requested=true" className={badgeVariants({ variant: "outlineimg" })}>→ Attend our summer meetups in SF, NYC, and ATL.</Link>
                        <h1 className={`w-[85%] text-[70px] leading-[125%] ${plus_jakarta_sans_extrabold.className} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>The path to moving your ideas forward awaits.</h1>
                        <p className={`text-[24px] leading-[150%] ${plus_jakarta_sans_regular.className} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SX offers students the community and mentors that enable them to become full-time founders. 
                        Sign up to hear about cool builders, campus communities, and upcoming events.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;