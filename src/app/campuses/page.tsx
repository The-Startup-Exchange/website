"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
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
    messina_book,
    messina_light
} from '../fonts';

const Campuses = () => {
    const { theme } = useTheme();
    const numRows = Math.ceil(campuses.length / 2);

    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center pb-12 justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-dot-black/[0.2]'} border-x items-start justify-center gap-y-4`}>
                    <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'} [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}></div>
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
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`text-end ${messina_light.className}`}>Fostering, growing, & supporting communities</p>
                    </div>
                    <div className="items-end px-72 pb-28 space-y-12">
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            We partner with existing college entrepreneurship organizations, or start new ones on campuses that don't have them.
                        </p>
                        <div className="flex flex-row w-full justify-end">
                            <p className={`text-[18px] w-[60%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                               Organizations that align with our goals and values are invited to be SX-affiliated organizations. They receive support, resources, and access to the SX network.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`text-start ${messina_light.className}`}>Our process</p>
                    </div>
                    <div className="items-end px-72 pb-28 space-y-12">
                        <div className="flex flex-col space-y-4">
                            <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                                1. We identify campuses with promising activity of active builders on campus.
                            </p>
                            <p className={`text-[24px] w-[90%] leading-[125%] ${plus_jakarta_sans_regular.className}`}>
                                (i.e folks that build + share side projects, or decide to go full-time on their ideas)
                            </p>
                        </div>
                        <p className={`text-[18px] px-12 w-[90%] leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            We usually source this through social media, or through inbound of success stories on a given campus.
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            2. Once identified, we either reach out to a school or act upon received inbound from a school
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_medium.className}`}>
                            We have an “exploratory” call where we jam on:
                            <ul className={`px-2 mt-2 ${plus_jakarta_sans_thin.className}`}>
                                <li>- what builder/maker culture is like on campus</li>
                                <li>- their thoughts on how/whether they want that culture to change</li>
                                <li>- how they’ve compensated for the shortcomings of community on campus</li>
                                <li>- we also filter out those that lack an interest</li>
                            </ul>
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            3. If a viable fit, we jam on hosting a "Ship-It" event on their campus.
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            "Ship-It" is an event that our campuses host every week to regularly bring student makers, builders, and creators together. It’s three hours set aside to work on a side project, and to get feedback from others on your idea.
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            Organizers are not confined to solely hosting "Ship-It", but it’s our strongly recommended starting point for bringing builders together.
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_medium.className}`}>
                            We prioritize organizers who we feel:
                            <ul className={`px-2 mt-2 ${plus_jakarta_sans_thin.className}`}>
                                <li>- offer experience and an appealing presence that would garner and attract community</li>
                                <li>- have a genuine interest in building community.</li>
                            </ul>
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            4. We follow up 1/2x and wait.
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            We want a school/organizer to show initiative. Building community is hard and requires passion. So even if a campus has potential, we don’t force it too much.
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            5. The first "Ship-It" / campus event is hosted!
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            We help host, and do a retro afterwards.
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            6. We check in week to week and check for consistency with community growth.
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_medium.className}`}>
                            An implicit tracker is:
                            <ul className={`px-2 mt-2 ${plus_jakarta_sans_thin.className}`}>
                                <li>- Are they looking to improve?</li>
                                <li>- Are they asking questions?</li>
                                <li>- Are they asking us for more resources?</li>
                            </ul>
                        </p>
                        <p className={`text-[36px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                            7. We propose next steps through programming or campus collaboration
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_medium.className}`}>
                            When deciding to propose additional programs, hackathons, demo days, or other events, we’re looking to answer the following:
                            <ul className={`px-2 mt-2 ${plus_jakarta_sans_thin.className}`}>
                                <li>- How do we support growing the community of each campus?</li>
                                <li>- How do we build out funnels at each campus?</li>
                            </ul>
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_thin.className}`}>
                            We also jam on potential ways to improve the community's experience at "Ship-It."
                        </p>
                        <p className={`text-[18px] px-12 leading-[175%] ${plus_jakarta_sans_medium.className}`}>
                            Members are walked through tips for improving the event experience including:
                            <ul className={`px-2 mt-2 ${plus_jakarta_sans_thin.className}`}>
                                <li>- Mentors</li>
                                <li>- Workshops</li>
                                <li>- Growth & marketing</li>
                                <li>- Collaborating with other organizations on campus</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`w-[94%] p-20 space-y-6  ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x `}>
                    <div className="items-start">
                        <p className={`text-end ${messina_light.className} pb-6`}>Participating campuses</p>
                    </div>
                    {Array.from({ length: numRows }, (_, rowIndex) => (
                        <div key={rowIndex} className={`flex flex-row justify-between gap-x-16`}>
                            {campuses.slice(rowIndex * 2, (rowIndex + 1) * 2).map((campus, index) => (
                                <Link key={index} href={campus.link} className={`flex flex-col w-[50%] align-start space-y-6 text-start ${plus_jakarta_sans_regular.className}`}>
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
            </div>
            <Footer />
        </>
    );
  }
  
  export default Campuses;

//   560x448