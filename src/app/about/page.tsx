"use client";

import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular
} from '../../app/fonts';


const AboutPage = () => {
    const { theme } = useTheme();
  
    return (
        <>
            <Header />
            <div className={`flex flex-col items-center align-center justify-center w-full px-32 py-16 ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <h1 className={`w-full text-center text-[70px] pb-16 leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>About us</h1>
                <div className={`flex flex-col w-full px-56 space-y-8 text-start leading-[175%] ${plus_jakarta_sans_regular.className}`}>
                    <p>
                    Startup Exchange (SX) is a nonprofit community that empowers university students to become successful startup founders through accountability, mentorship, personal development, and rapid iteration of their ideas.
                    </p>
                    <p>
                        Our mission is to create a universally accessible space for university students to become startup founders.
                    </p>
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