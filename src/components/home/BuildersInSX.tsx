import { Button } from "@/components/ui/button";
import { useTheme } from '../../context/ThemeContext';
import Image from "next/image";
import Link from "next/link";
import { builders } from '../../data/buildersData';

import {
    plus_jakarta_sans_medium,
    plus_jakarta_sans_semibold,
    messina_book
} from '../../app/fonts';

const BuildersInSX = () => {
  const { styles, theme } = useTheme();
  return (
    <div className={`flex flex-col w-[100%] ${styles.textColor} ${styles.backgroundColor}`}>
      <div className={`flex flex-col md:mx-11 mx-5 py-[75px] gap-y-24 ${styles.borderColor} border-x`}>
        <div
          className="flex flex-col w-full items-start px-12 justify-start space-y-10">
            <h1 className={`md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX is a community for the most ambitious college students looking to become full-time founders.</h1>
            <p className={`md:text-[36px] text-[18px] leading-[150%] ${plus_jakarta_sans_medium.className}`}>Our community helps you grow from -1 to 1.</p>
        </div>
        <div
          className="flex flex-row w-full px-12 justify-between align-center items-center">
            <h1 className={`${styles.textColor} md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}> Builders in SX</h1>
            <Button href="/community" variant="outline" className={`py-3 px-5 `}>
              <div className={`${messina_book.className} font-bold`}>
              VIEW ALL {'>'}
              </div>
            </Button>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {builders.map((builder, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className={`relative border ${styles.borderColor}`} style={{ height: '238px' }}>
                  <Image src={builder.pic} layout="fill" objectFit="cover" className={`${styles.borderColor}`} alt="sx" />
                  <p className={`absolute bottom-2 right-2 text-[14px] ${messina_book.className}`}>{builder.category}</p>
                </div>
                <div className={`border border-dashed p-5 space-y-4 ${styles.borderColor}`}>
                    <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_semibold.className}`} style={{ minHeight: '70px' }}>{builder.oneLiner}</p>
                    <div className="flex flex-row justify-between items-center">
                        {/* <Image src={builder.college} height={30} width={48} className="w-[15%] h-auto" alt="college logo" /> */}
                        <Link href={builder.link}>
                            <Button href={builder.link} variant="secondary" className="rounded-full border border-[#242424] bg-transparent text-white hover:text-black p-3.5">
                                <div className={`${messina_book.className} text-xl font-bold`}>
                                    →
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildersInSX