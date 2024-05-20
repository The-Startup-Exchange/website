"use client";
// import { posthog } from 'posthog-js';
import { useEffect } from 'react';

const Blog = () => {
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

export default Blog;