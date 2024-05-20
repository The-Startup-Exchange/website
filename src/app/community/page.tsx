"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
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
    messina_book,
    messina_light
} from '../fonts';

const Community = () => {
    const { theme, styles } = useTheme();
    const numRows = Math.ceil(builders.length / 2);

    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center pb-12 justify-center ${styles.textColor} ${styles.backgroundColor}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-dot-black/[0.2]'} border-x items-start justify-center gap-y-4`}>
                    <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'} [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}></div>

                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>COMMUNITY</h1>
                    <div className={`flex flex-row w-full space-x-16 items-center justify-between ${plus_jakarta_sans_regular.className}`}>
                        <p className="text-[48px] w-[50%] leading-[125%] ">
                            We take you from -1 to 1.
                        </p>
                        <div className="flex flex-col space-y-4 w-[50%]">
                            <p className={`text-[18px] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                Our 0 → 1 program enables students to take meaningful steps with their idea, and to grow as an early-stage founder.
                            </p>
                            <p className={`text-[18px] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                Connect further through our events and partnered organizations, which help students to turn an idea into an early iteration with users.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="justify-end px-12 py-12">
                        <p className={`${messina_light.className} text-end`}>GO FROM 0 → 1 WITH SX.</p>
                    </div>
                    <div className="items-end px-72 pb-28 space-y-12">
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            Transform your dorm room project into an early-stage startup with others that hold you accountable.
                        </p>
                        <div className="flex flex-col w-full items-end space-y-6">
                            <p className={`text-[18px] w-[60%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                0 → 1 is a semester-long program that combines accountability pods, expert-led workshops, and a supportive community spanning different campuses to help you build, validate, and launch your MVP.
                            </p>
                            <p className={`text-[18px] w-[60%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                10 hrs/week. Online + irl in SF. Completely free.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-row w-[94%] z-10 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x space-x-8`}>
                    <div className="px-12 w-full flex flex-col py-12 space-y-12">
                        <p className={`${messina_light.className} w-full`}>WHY 0 → 1?</p>
                        <div className="space-y-12">
                            <div className="flex flex-row space-x-8 items-center">
                                <div className={`rounded-full border flex items-center justify-center ${theme === 'dark' ? 'border-[#fff] text-white ' : 'border-[#e0e0e0] text-black'} bg-transparent px-6 py-1`} style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
                                    <div className={`${messina_book.className} text-md font-bold`}>
                                        1
                                    </div>
                                </div>
                                <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_thin.className}`}>
                                    Accelerate your learnings, and rapidly make progress.
                                </p> 
                            </div>
                            <div className="flex flex-row space-x-8 items-center">
                                <div className={`rounded-full border flex items-center justify-center ${theme === 'dark' ? 'border-[#fff] text-white ' : 'border-[#e0e0e0] text-black'} bg-transparent px-6 py-1`} style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
                                    <div className={`${messina_book.className} text-md font-bold`}>
                                        2
                                    </div>
                                </div>
                                <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_thin.className}`}>
                                    Find mentors that are 2 to 3 steps ahead of you.
                                </p> 
                            </div>
                            <div className="flex flex-row space-x-8 items-center">
                                <div className={`rounded-full border flex items-center justify-center ${theme === 'dark' ? 'border-[#fff] text-white ' : 'border-[#e0e0e0] text-black'} bg-transparent px-6 py-1`} style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
                                    <div className={`${messina_book.className} text-md font-bold`}>
                                        3
                                    </div>
                                </div>
                                <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_thin.className}`}>
                                    Find other students with similar interests and goals.
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '500px', width: '100%', position: 'relative' }} className="mx-1">
                        <Image src={Images.communityRev} alt="0 → 1" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x`}>
                    <div className="px-12 w-full flex flex-col pt-12">
                        <p className={`${messina_light.className} w-full`}>HOW IT WORKS</p>
                    </div>
                    <div className="space-y-12 px-72 pt-16 pb-24 justify-center align-center items-center">
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            Each week, you meet to discuss your progress for the week.
                        </p>
                        <p className={`text-[18px] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                            You'll have the chance to present new learnings and gain insights from peers and mentors. Everyone in the program is committed to achieving their semester-defined goals, and developing consistent habits that enable them to achieve those goals.
                        </p>
                    </div>
                    <div className="flex flex-row w-full items-start justify-start space-x-8">
                        <div className={`flex flex-col border border-dashed ${styles.dashedBorderColor} w-1/3`}>
                            <div className="w-full relative">
                                <Image
                                    src={Images.communityRev}
                                    alt="0 → 1"
                                    height={60}
                                    className="opacity-80 hover:opacity-100 transition duration-500"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <p className={`absolute bottom-4 right-4 text-gray-200 text-[18px] tracking-tight ${messina_book.className}`}>Make consistent progress</p>
                            </div>
                        </div>
                        <div className={`flex flex-col border border-dashed ${styles.dashedBorderColor} w-1/3`}>
                            <div className="w-full relative">
                                <Image
                                    src={Images.communityRev}
                                    alt="0 → 1"
                                    height={60}
                                    className="opacity-80 hover:opacity-100 transition duration-500"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <p className={`absolute bottom-4 right-4 text-gray-200 text-[18px] tracking-tight ${messina_book.className}`}>Learn from peers and mentors</p>
                            </div>
                        </div>
                        <div className={`flex flex-col border border-dashed ${styles.dashedBorderColor} w-1/3`}>
                            <div className="w-full relative">
                                <Image
                                    src={Images.communityRev}
                                    alt="0 → 1"
                                    height={60}
                                    className="opacity-80 hover:opacity-100 transition duration-500"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <p className={`absolute bottom-4 right-4 text-gray-200 text-[18px] tracking-tight ${messina_book.className}`}>Develop useful habits</p>
                            </div>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-end items-end`}>QUICK DISCLAIMER</p>
                    </div>
                    <div className={`flex flex-col space-y-12 px-72 pb-28 justify-center`}>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            This is not a bootcamp or a step-by-step tutorial.
                        </p>
                        <div className="flex flex-col space-y-8 px-20">
                            <p className={`text-[18px] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                We won’t teach you how to code a web app, or how to build a guided project. You can find that information on YouTube, ChatGPT, and Google.
                            </p>
                            <p className={`text-[18px] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                However, when you need guidance on niche questions or want to fill small gaps in your skillset, you'll have the support of your peers and mentors to help you navigate the unique challenges of building your idea.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                {Array.from({ length: numRows }, (_, rowIndex) => (
                    <div key={rowIndex} className={`flex flex-row w-[94%] p-20 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-between gap-x-16`}>
                        {builders.slice(rowIndex * 4, (rowIndex + 1) * 4).map((builder, index) => (
                            <Link key={index} href={builder.link} className={`flex flex-col align-start w-[21%] space-y-6 text-start ${plus_jakarta_sans_regular.className}`}>
                                <div className="relative w-full h-full">
                                    <Image src={builder.pic} alt={builder.category} width={352} height={423}/>
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