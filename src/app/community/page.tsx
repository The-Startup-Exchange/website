"use client";

import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import Images from "../../assets/images";
import Link from "next/link";
import DashedDivider from "@/components/dashedDivider";
import { builders } from '../../data/buildersData';
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_thin,
    messina_book
} from '../fonts';

const Community = () => {
    const { theme } = useTheme();
    const numRows = Math.ceil(builders.length / 2);

    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center pb-12 justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x items-start justify-center gap-y-4`}>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>COMMUNITY</h1>
                    <div className={`flex flex-row w-full space-x-16 items-center justify-between ${plus_jakarta_sans_regular.className}`}>
                        <p className="text-[48px] w-[50%] leading-[125%] ">
                            We take you from -1 to 1.
                        </p>
                        <div className="flex flex-col space-y-4 w-[50%]">
                            <p className={`text-[18px] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                Our events and partnered organizations help students to turn an idea into an early iteration with users.
                            </p>
                            <p className={`text-[18px] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                For those working on an idea, our 0 → 1 program enables students to take meaningful steps towards becoming a full-time startup founder.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                {Array.from({ length: numRows }, (_, rowIndex) => (
                    <div className={`flex flex-row w-[94%] p-20 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-between gap-x-16`}>
                        {builders.slice(rowIndex * 4, (rowIndex + 1) * 4).map((builder) => (
                            <Link href={builder.link} className={`flex flex-col align-start w-[21%] space-y-6 text-start ${plus_jakarta_sans_regular.className}`}>
                                <div className="relative w-full h-full">
                                    <Image  src={builder.pic} alt={builder.category} width={352} height={423}/>
                                </div>
                                <div className="space-y-4">
                                    <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                                        {builder.oneLiner}
                                    </p>
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        {builder.category.toUpperCase()}
                                    </p>
                                    <Image src={builder.college} alt="Logo" width={50} height={50} />
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
                <DashedDivider />
            </div>
            <Footer />
        </>
    );
  }
  
  export default Community;

//   560x448