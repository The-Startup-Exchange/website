"use client";
// import { posthog } from 'posthog-js';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from "../../components/header";
import Footer from "../../components/footer";
import DashedDivider from "@/components/dashedDivider";
import Image from 'next/image';
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';

import {
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_thin,
    messina_book,
    messina_light,
    crimson_regular_italic,
    messina_semibold
} from '../fonts';


const Events = () => {
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
                        <p className={`text-end ${messina_light.className}`}>Previous events</p>
                    </div>
                    <div className="items-end md:px-12 px-12 pb-20 space-y-12">
                        <Link href="/" className={`flex flex-row w-full space-x-8 align-center items-center text-start ${plus_jakarta_sans_regular.className}`}>
                            <div className="relative w-[50%] h-full">
                                <Image src={Images.aiatl} alt="hi" width={550} height={300} objectFit="cover"/>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 flex items-center justify-center transition-opacity duration-300">
                                    <Image src={Images.sxLogo} alt="Logo" width={100} height={100} />
                                </div>
                            </div>
                            <div className="justify-center space-y-12 align-center items-center">
                                <div>
                                    <p className={`text-[32px] ${plus_jakarta_sans_medium.className}`}>
                                        AI ATL
                                    </p>
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                    Georgia Tech & Atlanta's official AI hackathon. 400+ participants in 2023.
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        Sponsors
                                    </p>
                                    <div className="w-full flex flex=row">
                                        <Image
                                        src={Images.google}
                                        alt="Google"
                                        height={32}
                                        className="opacity-80 hover:opacity-100 transition duration-500"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                        <Image
                                        src={Images.anthropic}
                                        alt="Google"
                                        height={32}
                                        className="opacity-80 hover:opacity-100 transition duration-500"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                        <Image
                                        src={Images.huggingFace}
                                        alt="Google"
                                        height={32}
                                        className="opacity-80 hover:opacity-100 transition duration-500"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                        <Image
                                        src={Images.bcgX}
                                        alt="Google"
                                        height={32}
                                        className="opacity-80 hover:opacity-100 transition duration-500"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                         <Image
                                        src={Images.roboflow}
                                        alt="Google"
                                        height={32}
                                        className="opacity-80 hover:opacity-100 transition duration-500"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
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