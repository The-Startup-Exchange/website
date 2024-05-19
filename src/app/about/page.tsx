"use client";

import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_thin,
    messina_book
} from '../../app/fonts';


const AboutPage = () => {
    const { theme } = useTheme();
  
    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center pb-12 justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
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
                <div className="py-28">
                    <div className={`flex flex-col w-full px-56 space-y-12 text-start align-end justify-end items-end ${plus_jakarta_sans_regular.className}`}>
                        <p className="text-[36px] leading-[125%] ">
                            Startup Exchange is on a mission to create a universally accessible space for university students to become startup founders.
                        </p>
                        <p className={`text-[18px] w-[60%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                            We envision a reality where builders can figure out how to succesfully build and grow a startup idea, regardless of what college they attend.
                        </p>
                    </div>
                </div>
                <h1 className={`w-full text-center text-[48px] leading-[125%] py-16 ${plus_jakarta_sans_bold.className}`}>Our story</h1>
                <div className={`flex flex-col w-full px-56 space-y-8 text-start leading-[175%] ${plus_jakarta_sans_regular.className}`}>
                    <p>
                        We’re on a mission to better define college entrepreneurship. While college is an exciting time to work on your craziest ideas, many students feel lost in the process of developing their ideas. We’re here to change that.
                    </p>
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
                    <p>
                        We centralize a network of domain experts, startups, mentors, and investors that enable students to go from -1 to 1.
                    </p>
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