"use client";

import { Button } from "@/components/ui/button";
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_medium,
    messina_book
} from '../app/fonts';
import { useTheme } from '../context/ThemeContext';

const CTA = () => {
  const { styles } = useTheme();
  return (
    <div className={`flex flex-col w-[94%] py-[75px] ${styles.borderColor} border-x items-start justify-start gap-y-20 ${styles.backgroundColor} ${styles.textColor}`}>
    <div className="flex flex-row px-28 items-start w-full">
      <h1 className={`text-[#FFFFFF] w-[70%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Join the Startup Exchange community</h1>
    </div>
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-row px-28 items-start w-full space-x-6">
        <Button variant="secondary" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
          <h1 className={`text-[#000] text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Apply to join</h1>
          <h1 className={`text-[#000] text-[16px] tracking-tighter ${messina_book.className}`}>the F24 cohort</h1>
        </Button>
        <Button href="https://discord.gg/6nXvx6fG6V" variant="outline" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
          <h1 className={`text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Join our discord</h1>
          <h1 className={`text-[#7E7E7E] text-[16px] tracking-tighter ${messina_book.className}`}>for announcements</h1>
        </Button>
      </div>
      {/* <div className="flex flex-row px-28 items-start w-full space-x-6">
        <Button variant="secondary" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
          <h1 className={`text-[#000] text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Apply to join</h1>
          <h1 className={`text-[#000] text-[16px] tracking-tighter ${messina_book.className}`}>the F24 cohort</h1>
        </Button>
      </div> */}
    </div>
  </div>
  )
}

export default CTA;