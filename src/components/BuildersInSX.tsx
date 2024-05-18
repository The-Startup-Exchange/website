import { Button } from "@/components/ui/button";
import { useTheme } from '../context/ThemeContext';
import Image from "next/image";
import Images from '../assets/images';
import Link from "next/link";

import {
    plus_jakarta_sans_medium,
    plus_jakarta_sans_semibold,
    messina_book
} from '../app/fonts';

const builders = [
  {
    oneLiner: "Vik is using AI agents to build the easiest way for nontechnical folks to learn technical skills.",
    category: "DEVELOPER TOOLS",
    pic: Images.vik,
    college: Images.georgiaTech,
    link: "https://twitter.com/therealvikranth",
  },
  {
    oneLiner: "Vik is using AI agents to build the easiest way for nontechnical folks to learn technical skills.",
    category: "DEVELOPER TOOLS",
    pic: Images.vik,
    college: Images.georgiaTech,
    link: "https://twitter.com/therealvikranth",
  },
  {
    oneLiner: "Vik is using AI agents to build the easiest way for nontechnical folks to learn technical skills.",
    category: "DEVELOPER TOOLS",
    pic: Images.vik,
    college: Images.georgiaTech,
    link: "https://twitter.com/therealvikranth",
  },
  {
    oneLiner: "Vik is using AI agents to build the easiest way for nontechnical folks to learn technical skills.",
    category: "DEVELOPER TOOLS",
    pic: Images.vik,
    college: Images.georgiaTech,
    link: "https://twitter.com/therealvikranth",
  },
  {
    oneLiner: "Vik is using AI agents to build the easiest way for nontechnical folks to learn technical skills.",
    category: "DEVELOPER TOOLS",
    pic: Images.vik,
    college: Images.georgiaTech,
    link: "https://twitter.com/therealvikranth",
  },
];

const BuildersInSX = () => {
  const { styles } = useTheme();
  const numRows = Math.ceil(builders.length / 5);
  return (
    <div className={`flex flex-col w-[94%] py-[75px] ${styles.borderColor} ${styles.backgroundColor} border-x items-start justify-start text-6xl font-bold gap-y-4`}>
          <div className="flex flex-col w-full gap-y-24">
            <div
              className="flex flex-col w-full items-start px-12 justify-start lg:space-y-10 space-y-0">
                <h1 className={` ${styles.textColor} w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX is a community for the most ambitious college students looking to become full-time founders.</h1>
                <p className={`${styles.textColor} text-[36px] leading-[150%] ${plus_jakarta_sans_medium.className}`}>Our community helps you grow from -1 to 1.</p>
            </div>
            <div
              className="flex flex-row w-full px-12 items-start justify-between lg:space-y-4 space-y-0">
                <h1 className={`${styles.textColor} w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}> Builders in SX</h1>
                <Button variant="outline" className="rounded-xl py-3 px-5">
                  <div className={`${messina_book.className} font-bold`}>
                  VIEW ALL {'>'}
                  </div>
                </Button>
            </div>
            <div className="flex flex-col w-full">
              {Array.from({ length: numRows }, (_, rowIndex) => (
                <div className="flex flex-row space-x-3">
                  {builders.slice(rowIndex * 5, (rowIndex + 1) * 5).map((builder) => (
                  <div className="flex flex-col w-[307px]">
                    <div className={`relative border rounded-t-xl ${styles.borderColor}`}>
                      <Image src={builder.pic} height={238} width={307} className="rounded-t-xl" alt="sx" />
                      <p className={`absolute bottom-2 right-2 text-[14px] ${messina_book.className}`}>{builder.category}</p>
                    </div>
                    <div className={`border border-dashed rounded-b-xl p-5 space-y-4 ${styles.borderColor}`}>
                        <p className={`text-[15px] leading-[150%] ${plus_jakarta_sans_semibold.className}`}>{builder.oneLiner}</p>
                        <div className="flex flex-row justify-between items-center">
                            <Image src={builder.college} height={36} width={56} className="h-[36px]" alt="college logo" />
                            <Link href={builder.link}>
                                <Button variant="outline" className="rounded-full p-3.5">
                                    <div className={`${styles.textColor} ${messina_book.className} text-xl font-bold`}>
                                        →
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default BuildersInSX

