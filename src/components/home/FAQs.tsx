"use client";

import Link from "next/link";
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import {
    messina_book,
    plus_jakarta_sans_medium
} from '../../app/fonts';

const faqs = [
    { 
        text: "What kind of students join the community?",
        desc: "We want students who are builders and makers. It could be software development, design, engineering, CAD, architecture, real estate, branding, content creation, or absolutely anything." 
    },
    { 
        text: "What type of support can I expect from SX?",
        desc: "SX has mentors that are accomplished founders, domain experts, and investors. We also provide a community to build alongside with, and to push you to elevate your ideas." 
    },
    { 
        text: "Who can apply?",
        desc: "Any university student or recent graduate. We accept students from colleges everywhere, undergraduate, graduate, or doctorate." 
    },
    { 
        text: "Is this remote or in-person?",
        desc: "Our events are in-person in the Atlanta area, and virtual for non-ATL students. This will change in the future as we expand!" 
    },
    { 
        text: "Is it seriously free?",
        desc: "Yes. 100%. We fund these programs by partnering with companies, funds, and educational institutions. We also don't take any equity-- SX is solely focused on supporting builders." 
    },
    { 
        text: "Are my expenses covered for IRL events?",
        desc: "No, you are in charge of covering your flights + accommodations. We are working with universities to provide reimbursements in the future." 
    },
    { 
        text: "I am not in tech. Can i still apply?",
        desc: "Absolutely. We support builders that innovate in any fashion!" 
    },
];

const FAQs = () => {
  const { theme, styles } = useTheme();
  return (
    <div className={`flex flex-col w-full items-start justify-start gap-y-4 ${styles.backgroundColor} ${styles.textColor}`}>
    <div className={`flex flex-row px-28 py-[75px] mx-11 border-x items-start ${styles.borderColor}`}>
      <h1 className={`w-[50%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>FAQs</h1>
      <div className={`flex flex-col w-full ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-t items-start justify-start`}>
        {faqs.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  </div>
  )
}

const FAQItem = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();
    const descriptionStyle = {
      maxHeight: isVisible ? '200px' : '0px', // Adjust '200px' as needed
      overflow: 'hidden',
      transition: 'all 0.5s ease',
      opacity: isVisible ? 1 : 0
    };
  
    return (
      <div className="w-full">
        <div className={`flex flex-row w-full ${isVisible ? '' : 'border-b'} border-[#323232] py-12 align-start items-start justify-start space-x-4 cursor-pointer`}
             onClick={() => setIsVisible(!isVisible)}>
            <h1 className={`text-[#A0A0A0] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className} ${isVisible ? 'rotate-90' : ''} transition duration-500`}>
            →
            </h1>
            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
              {item.text}
            </h1>
        </div>
        <div style={descriptionStyle}>
          <div className="flex flex-row w-full border-b border-[#323232] pb-12 align-start items-start justify-start space-x-4">
            <h1 className={`text-[#7E7E7E] text-[21px] px-[40px] tracking-tight leading-[125%] ${messina_book.className}`}>
              {item.desc}
            </h1>
          </div>
        </div>
      </div>
    );
  }

export default FAQs