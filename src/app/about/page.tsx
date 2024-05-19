"use client";

import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import Images from "../../assets/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashedDivider from "@/components/dashedDivider";
import { useTheme } from '../../context/ThemeContext';
import { partners } from '../../data/partnerData';
import { team } from '../../data/teamData';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_thin,
    messina_book,
    messina_light
} from '../../app/fonts';


const AboutPage = () => {
    const { theme } = useTheme();
    const numRows = Math.ceil(team.length / 2);
  
    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'} ${plus_jakarta_sans_regular.className}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x items-start justify-center gap-y-4`}>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>ABOUT US</h1>
                    <div className={`flex flex-row w-full space-x-16 items-center ${plus_jakarta_sans_regular.className}`}>
                        <p className="text-[48px] w-[50%] leading-[125%] ">
                            Who we are
                        </p>
                        <p className={`text-[18px] w-[50%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                        We are a nonprofit community that empowers university students to become successful startup founders through accountability, mentorship, personal development, and rapid iteration of their ideas.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`${messina_light.className}`}>Empowering do-ers to reach their full potential.</p>
                    </div>
                    <div className="items-end px-72 pb-28 space-y-12">
                        <p className="text-[36px] leading-[125%]">
                            Startup Exchange is on a mission to create a universally accessible space for university students to become startup founders.
                        </p>
                        <div className="flex flex-row w-full justify-end">
                            <p className={`text-[18px] w-[60%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                We envision a reality where builders can figure out how to succesfully build and grow a startup idea, regardless of what college they attend.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-end items-end`}>How we started</p>
                    </div>
                    <div className={`flex flex-col space-y-8 justify-center gap-y-4`}>
                        <p className="text-[36px] px-36">
                            We’re on a mission to better define college entrepreneurship. While college is an exciting time to work on your craziest ideas, many students feel lost in the process of developing their ideas.
                        </p>
                        <p className="px-36">
                            We’re here to change that.
                        </p>
                        <div className={`px-80 space-y-8 text-[18px] ${plus_jakarta_sans_thin.className}`}>
                            <p>
                                Startup Exchange began as a club at Georgia Tech, gathering makers, builders, and creatives in the library every week to discuss their most ambitious startup ideas. Over 10 years, students from this group went on to start a variety of companies, collectively valued at over $4.5B.
                            </p>
                            <p>
                                As our community expanded in 2023 through our events, we attracted thousands of students from universities nationwide who expressed a need for a new space that prioritizes the rapid iteration of shipping fast, and that attracts genuine and passionate people.
                            </p>
                            <p>
                            SX is committed to cultivating communities at campuses in need, and supporting established communities. By bringing together organizers from universities nationwide, our team understands the unique challenges that every campus faces when it comes to building a community of like-minded entrepreneurs.
                            </p>
                            <p>
                                Our mission is to create dynamic, inclusive communities where students can find like-minded peers, fostering close-knit collaboration and meaningful connections that encourage them to further invest in their entrepreneurial journey.                    </p>
                        </div>
                    </div>
                    <div className="items-end px-56 pb-28">
                        <p className="text-[36px] text-center leading-[125%] py-12">
                            We centralize a network of domain experts, startups, mentors, and investors that enable students to go from -1 to 1.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-start gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-start items-end`}>Our team</p>
                    </div>
                    <div className={`flex flex-col px-12 justify-start space-y-16`}>
                        {Array.from({ length: numRows }, (_, rowIndex) => (
                            <div className={`flex flex-row px-20 gap-x-28`}>
                                {team.slice(rowIndex * 4, (rowIndex + 1) * 4).map((teamMember) => (
                                    <div className={`flex flex-col align-start w-[20%] space-y-6 text-start`}>
                                        <div className="relative w-full h-full">
                                            <Image src={teamMember.image} alt={teamMember.name} width={250} height={250}/>
                                        </div>
                                        <div className="space-y-4">
                                            <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                                                {teamMember.name}
                                            </p>
                                            <p className={`text-[14px] ${messina_book.className}`}>
                                                {teamMember.role.toUpperCase()}
                                            </p>
                                            <div className="flex flex-row space-x-4">
                                                {teamMember.twitter && (
                                                    <Link href={teamMember.twitter}>
                                                        <Image src={theme === 'dark' ? Images.twitter : Images.twitterBlack} alt="Twitter" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                                {teamMember.linkedin && (
                                                    <Link href={teamMember.linkedin}>
                                                        <Image src={theme === 'dark' ? Images.linkedin : Images.linkedinBlack} alt="LinkedIn" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                                {teamMember.personal && (
                                                    <Link href={teamMember.personal}>
                                                        <Image src={theme === 'dark' ? Images.paperclip : Images.paperclipBlack} alt="Additional Link" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="px-32 pb-28 w-full flex justify-between space-x-12 items-center">
                            <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full`}>Join us and shape the future of college entrepreneurship.</p>
                            <Button href="/" variant="secondary">View open positions</Button>
                        </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-start gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-start items-end`}>Trusted by leading investors, startups, and corporations.</p>
                    </div>
                    <div className={`flex flex-col my-[75px] ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-[#242424] border-dashed border-t items-start justify-start`}>
                        {Array.from({ length: numRows }, (_, rowIndex) => (
                        <div className={`flex flex-row w-full border-b border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'}`}>
                            {partners.slice(rowIndex * 4, (rowIndex + 1) * 4).map(partner => (
                            <div className={`flex flex-row w-full border-r border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} py-24 px-12 align-center items-center justify-center`}>
                                <Link href={partner.href}>
                                <Image
                                    src={theme === 'dark' ? Images[partner.name] : (partner.black ? Images[partner.black] : Images[partner.name])}
                                    alt={partner.name}
                                    width={200}
                                    height={200}
                                    className="opacity-80 hover:opacity-100 transition duration-500"
                                />
                                </Link>
                            </div>
                            ))}
                        </div>
                        ))}
                    </div>
                    <div className="px-32 pb-28 w-full flex justify-between space-x-12 items-center">
                            <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full`}>Join us and shape the future of college entrepreneurship.</p>
                            <Button href="/" variant="secondary">View open positions</Button>
                        </div>
                </div>
            </div>
            <Footer />
        </>
  );
};

export default AboutPage;


/// at sx, our team is solving a couple of problems.
// 1. we're debunking what it takes to get an idea off the ground
// we're giving students an opportunity to connect with students at different campuses
// we're helping students to navigate balancing school and their startup  