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
                        Our goal is to empower students with an ambition to change the world to reach their full potential. 
                        </p>
                    </div>
                </div>
                <h1 className={`w-full text-center text-[48px] leading-[125%] py-16 ${plus_jakarta_sans_bold.className}`}>Our story</h1>
                <div className={`flex flex-col w-full px-56 space-y-8 text-start leading-[175%] ${plus_jakarta_sans_regular.className}`}>
                    <p>
                        We’re on a mission to redefine college entrepreneurship from the ground up. College is an exciting time to work on your craziest ideas and for finding like-minded peers to solve interesting problems together. ~40% of co-founders meet in college, according to MIT.
                    </p>
                    <p>
                        Startup Exchange began as a club at Georgia Tech, gathering makers, builders, and creatives in the library every week to discuss their most ambitious startup ideas. Over 10 years, students from this group went on to start a variety of companies, collectively valued at over $4.5B.
                    </p>
                    <p>
                        In 2023, our community expanded significantly, attracting attention from hundreds of students around the Atlanta area, and from universities nationwide. These students echoed a common sentiment of misguided initiatives and lack of community at their campuses, expressing a strong desire for a new space for builders of all kinds to be brought together.
                    </p>
                    <p>
                        Supporting all stages of growth, pain points from student builders across the nation have shed a noticeable disconnect between the practical aspects of developing and iterating an idea and the theoretical principles that currently shape college entrepreneurship ecosystems.
                    </p>
                    <p>
                        In response, SX is committed to bridging this gap, providing targeted support to both new initiatives and well-established organizations. After collecting broadened insights from different universities, our team understands that each level of ecosystem development has its unique challenges and opportunities. The insight and resources we offer are meticulously designed to ensure that both emerging and existing groups not only overcome these challenges, but also capitalize on opportunities to realize their full potential and impact.
                    </p>
                    <p>
                        Envisioning the future of college entrepreneurship, our team is dedicated to redefining the pathway for college students in entrepreneurship.
                    </p>
                    <p>
                        We aim to reform the shortcomings of current college entrepreneurship ecosystems, which often included misguided advice or fail to provide the community support crucial for peer-to-peer learning and idea validation.
                    </p>
                    <p>
                        We recognize that many student entrepreneurs often lack the quality mentorship or resources to fully develop their ideas, whether to secure venture backing or to identify and solidify a proven market presence. To address this, we provide not just mentorship but also strategic guidance to help students refine their concepts, validate their business models, and steer clear of common pitfalls.
                    </p>
                    <p>
                        Beyond offering sound mentorship, a key part of our mission is to create dynamic, inclusive communities where students can find like-minded peers to work on meaningful problems with. This includes granularity on how we establish, support, and advance community, which is crucial for encouraging students to invest further in their path in entrepreneurship.
                    </p>
                    <p>
                        Startup Exchange is crafting the ultimate playbook for ambitious university students. Our work aims to enable close-knit collaboration, high-quality mentorship, and meaningful connections with like-minded peers.
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