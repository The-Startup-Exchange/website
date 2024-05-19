"use client";

import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import Images from "../../assets/images";
import Link from "next/link";
import DashedDivider from "@/components/dashedDivider";
import { campuses } from '../../data/campusesData';
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_thin,
    messina_book
} from '../fonts';

const Campuses = () => {
    const { theme } = useTheme();
    const numRows = Math.ceil(campuses.length / 2);

    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center pb-12 justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x items-start justify-center gap-y-4`}>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>CAMPUSES</h1>
                    <div className={`flex flex-row w-full space-x-16 items-center text-start ${plus_jakarta_sans_regular.className}`}>
                        <p className="text-[48px] leading-[125%] ">
                            Organizations in the SX network
                        </p>
                        <p className={`text-[18px] w-[60%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                            We bring together student leaders and organizations from universities across the country to centralize a network of builders, investors, startups, and mentors.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                {Array.from({ length: numRows }, (_, rowIndex) => (
                    <div className={`flex flex-row w-[94%] p-20 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-between gap-x-16`}>
                        {campuses.slice(rowIndex * 2, (rowIndex + 1) * 2).map((campus) => (
                            <Link href={campus.link} className={`flex flex-col w-[50%] align-start space-y-6 text-start ${plus_jakarta_sans_regular.className}`}>
                                <div className="relative w-full h-full">
                                    <Image src={campus.pictureName} alt={campus.name} width={560} height={448} objectFit="cover"/>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex items-center justify-center transition-opacity duration-300">
                                        <Image src={campus.logo} alt="Logo" width={100} height={100} />
                                    </div>
                                </div>
                                <div>
                                    <p className={`text-[32px] ${plus_jakarta_sans_medium.className}`}>
                                        {campus.name}
                                    </p>
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        {campus.uni.toUpperCase()}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-[14px] ${plus_jakarta_sans_regular.className}`}>
                                        {campus.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
  }
  
  export default Campuses;

//   560x448