"use client";

import { Button } from "@/components/ui/button";
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_medium,
    messina_book
} from '../../app/fonts';
import { useTheme } from '../../context/ThemeContext';

const CTA = () => {
  const { styles, theme } = useTheme();
  return (
    <div className={`flex flex-col w-full ${styles.backgroundColor} ${styles.textColor}`}>
      <div className={`${styles.borderColor} flex flex-col mx-11 border-x py-[75px] space-y-20`}>
        <div className="flex flex-row px-28 items-start w-full">
          <h1 className={`w-[70%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Join the Startup Exchange community</h1>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row px-28 items-start w-full space-x-6">
            <Button href="https://docs.google.com/forms/d/1K4TKHANO3iWyFM51OqRXBqT1wP2FTYEjE1pdz6559Y0/viewform?edit_requested=true" variant="secondary" className="flex-col items-center w-[272px] py-14 space-y-1.5">
              <h1 className={`${theme === 'dark' ? 'text-black' : 'text-white'} text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Apply to join</h1>
              <h1 className={`${theme === 'dark' ? 'text-black' : 'text-[#7E7E7E]'} text-[16px] tracking-tighter ${messina_book.className}`}>the F24 cohort</h1>
            </Button>
            <Button href="https://discord.gg/6nXvx6fG6V" variant="outline" className="flex-col items-center w-[272px] py-14 space-y-1.5">
              <h1 className={`text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Join our discord</h1>
              <h1 className={`text-[#7E7E7E] text-[16px] tracking-tighter ${messina_book.className}`}>for announcements</h1>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA;