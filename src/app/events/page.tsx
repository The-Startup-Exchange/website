"use client";
// import { posthog } from 'posthog-js';
import { useEffect } from 'react';

const Events = () => {
    useEffect(() => {
        Redirect();
    }, []);

    return null;
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