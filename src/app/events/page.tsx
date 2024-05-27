"use client";
// import { posthog } from 'posthog-js';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Marquee from "react-fast-marquee";
import DashedDivider from "@/components/dashedDivider";
import Image from 'next/image';
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';

import {
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_semibold,
    plus_jakarta_sans_thin,
    messina_book,
    messina_light,
    crimson_regular_italic,
    messina_semibold,
    messina_bold,
} from '../fonts';


const Events = () => {

    const speakers = [
        {
            name: "Michael Seibel",
            company: "Managing Director, Y Combinator",
            pic: Images.michaelGuest
        },
        {
            name: "Dylan Cooper",
            company: "SVP, PrizePicks",
            pic: Images.dylanGuest
        },
        {
            name: "Brooks Buffington",
            company: "Founder, YikYak",
            pic: Images.brooksGuest
        },
        {
            name: "Sean Henry",
            company: "Founder & CEO, Stord",
            pic: Images.seanGuest
        },
        {
            name: "Charu Thomas",
            company: "Founder & CEO, Ox",
            pic: Images.charuGuest
        },
        {
            name: "Chris Klaus",
            company: "Founder & CTO, ISS (acqr. by IBM)",
            pic: Images.chrisGuest
        },
        {
            name: "Kabir Barday",
            company: "Founder & CEO, OneTrust",
            pic: Images.kabirGuest
        },
        {
            name: "Dan Porter",
            company: "Founder & CEO, Overtime",
            pic: Images.danGuest
        },
        {
            name: "AJ Piplica",
            company: "Founder & CEO, Hermeus",
            pic: Images.ajGuest
        },
        {
            name: "Jhillika Kumar",
            company: "Founder & CEO, Mentra",
            pic: Images.jhillikaGuest
        },
        {
            name: "Kathryn Hays",
            company: "Founder, Kabbage (acqr. by AmEx)",
            pic: Images.kathrynGuest
        }
    ];
    const events =[
        {
            name: "AI ATL",
            description: "Georgia Tech & Atlanta's official AI hackathon. 400+ participants in 2023.",
            logo: Images.aiAtlLogo,
            image: Images.aiatl,
            link: "https://www.aiatl.io",
            sponsors: "Google, Anthropic, Hugging Face, Drive, BCGX, Founders Inc., ZFellows, Contrary, + more",
            attendees: "400+ from 43 universities"
        },
        {
            name: "PitchRx",
            description: "The largest collegiate healthcare pitch competition in digital health, AI and medical diagnostics. 250+ participants in 2024.",
            logo: Images.pitchRxLogo,
            image: Images.pitchRx,
            link: "https://www.pitchrx.io",
            sponsors: "Mayo Clinic, Tempus, 1517 Fund, Contrary, Drive Capital, Biolocity, + more",
            attendees: "250+ from 17 universities"
        },
        {
            name: "ImmerseGT",
            description: "Georgia Tech's official XR hackathon. Largest in the world in 2023.",
            logo: Images.immerseGTLogo,
            image: Images.immerseGT,
            link: "https://www.immersegt.io",
            sponsors: "Meta, Google, Nvidia, Unity, Accenture",
            attendees: "400+ from 53 universities globally"
        },
        {
            name: "ImpactHack",
            description: "The largest collegiate healthcare pitch competition in digital health, AI and medical diagnostics. 250+ participants in 2024.",
            logo: Images.impactHackLogo,
            image: Images.impactHack,
            link: "https://www.impacthackatl.com",
            sponsors: "Georgia Tech School of Public Policy, Teach for America, Cherry Street Energy, Sustainable-X",
            attendees: "200+ from 12 universities"
        },
        {
            name: "Hacklytics",
            description: "36-hour data-science focused hackathon. 1200+ participants, $20,000 in prizes.",
            logo: Images.hacklyticsLogo,
            image: Images.hacklytics,
            link: "https://www.hacklytics.io",
            sponsors: "Intel, National Security Agency, Microsoft, AWS, The D. E. Shaw Group, + more",
            attendees: "1200+ participants, 165 submitted projects"
        },
        {
            name: "Web3ATL",
            description: "Atlanta's premiere Web3 hackathon. Over $10,000 in prizes.",
            logo: Images.webThreeATLLogo,
            image: Images.webThreeATL,
            link: "https://hack.web3atl.io/",
            sponsors: "Chainlink, Arbitrum, Revest Finance",
            attendees: "250+ from 17 universities"
        }
    ];
    const { theme, styles } = useTheme();
    // useEffect(() => {
    //     Redirect();
    // }, []);

    // return null;
    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-white bg-dot-black/[0.2] '} border-x items-start justify-center gap-y-4`}>
                    <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]' : 'bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)]'}`}></div>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>EVENTS</h1>
                    <div className={`flex flex-col md:flex-row w-full md:space-x-16 space-y-8 md:space-y-0 md:items-center ${plus_jakarta_sans_regular.className}`}>
                        <p className="md:text-[48px] text-[32px] md:w-[50%] leading-[125%] ">
                        Find upcoming SX events

                        </p>
                        <p className={`text-[18px] md:w-[50%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                        We continuously bring cutting-edge and exciting opportunities to college builders. This includes hackathons, demo days, and pitch competitions.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`text-start ${messina_light.className}`}>Previous speakers</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <Marquee className="gap-x-9" speed={75} loop={0}>
                            <div className="flex flex-row gap-4">
                                {speakers.map((speaker, index) => (
                                <div key={index} className={`flex flex-col min-w-[200px] max-w-[250px] ${index === speakers.length - 1 ? 'mr-[-20px]' : ''}`}>
                                    <div className={`relative border ${styles.borderColor} border-dashed`} style={{ height: '238px' }}>
                                        <Image src={speaker.pic} layout="fill" objectFit="cover" className={``} alt="sx" />
                                    </div>
                                    <div className={`border border-dashed p-5 space-y-4 ${styles.borderColor}`}>
                                        <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_semibold.className}`} >{speaker.name}</p>
                                        <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_thin.className}`} style={{ minHeight: '45px' }}>{speaker.company}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`text-end ${messina_light.className}`}>Previous events</p>
                    </div>
                    <div className="px-12 pb-20 space-y-20">
                        {events.map((event, index) => (
                        <Link href={event.link} target="_blank" rel="noopener noreferrer" className={`flex flex-row w-full space-x-20 items-center ${plus_jakarta_sans_regular.className}`}>
                            <div className="relative w-[50%]">
                                <Image src={event.image} alt="hi" width={550} height={300} objectFit="cover" layout="responsive"/>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex items-center justify-center transition-opacity duration-300">
                                    <Image src={event.logo} alt="Logo" width={100} height={100} />
                                </div>
                            </div>
                            <div className="justify-center w-[50%] space-y-8 align-center items-center">
                                <div>
                                    <p className={`text-[32px] ${plus_jakarta_sans_medium.className}`}>
                                       {event.name}
                                    </p>
                                    <p className={`text-[18px] ${messina_book.className}`}>
                                   {event.description}
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        Sponsors & partners
                                    </p>
                                    <p className={`text-[14px] ${messina_bold.className}`}>
                                       {event.sponsors}
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        Attendees
                                    </p>
                                    <p className={`text-[14px] ${messina_bold.className}`}>
                                       {event.attendees}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const Redirect = async () => {
    // await posthog.init("phc_XbaVMJxYBOdYd6i6Ti3AOvAXQpLSLE1cQtvWi7hodfC", { api_host: "https://app.posthog.com" });

    // await posthog.capture('EarlyUser', {
    //     page: 'early-access',
    //     url: {
    //         current_url: window.location.href
    //     }
    // });

    window.location.href = 'https://lu.ma/sxevents';
}

export default Events;

// SX forges partnerships with industry leaders and organizations to bring opportunities to students everywhere, regardless of where they attend school. 
// Beyond community-partnered opportunities, we also host our own hackathons, pitch competitions, fireside chats, and networking events.



// While the pinnacle of innovation and building lies at the core of Silicon Valley, we imagine a reality where our events spread the culture of building and shipping beyond the Silicon Valley. 
// This is your chance to break into AI, Web3, XR, or any other form of emerging tech.



// Interested in having Startup Exchange as a community partner for your hackathon, pitch competition, or networking event? Contact us here.