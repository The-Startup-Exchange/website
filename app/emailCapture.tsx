"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { baseUrl } from "../lib/api/constants";
// import { useError } from "../lib/useError";
// import { AffiliateName } from "./pricing/affiliate/affiliateIcons";
// import TagManager from "react-gtm-module";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const router = useRouter();
//   const saveEmail = useSaveEmail();
//   const { addError } = useError();
//   const tagManagerArgs = {
//     gtmId: "GTM-KPCZM3KM",
//   };

//   type makeBody = {
//     email: string;
//   };
//   const makeWebhookURL = "https://hook.us1.make.com/r7rc3npskluiqgn5louyenwtbtl38zje";

//   const searchParams = useSearchParams();
//   let affiliateName = searchParams?.get("affiliateName");
//   if (!Object.values(AffiliateName).includes(affiliateName as AffiliateName)) {
//     affiliateName = "";
//   }

//   useEffect(() => {
//     const emailSubmitted = Cookies.get("emailSubmitted") === "true";
//     setIsEmailSubmitted(emailSubmitted);
//     TagManager.initialize(tagManagerArgs);
//   }, []);

//   const validateEmail = (email: string) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const handleSubmit = async () => {
//     if (email.length > 0) {
//       if (validateEmail(email)) {
//         saveEmail(email);
//         Cookies.set("emailSubmitted", "true", { expires: 30 }); // Set cookie for 7 days
//         // track facebook conversion
//         if (affiliateName && affiliateName == "Facebook") {
//           const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
//           const options = {
//             autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
//             debug: false, // enable logs
//           };
//           import("react-facebook-pixel")
//             .then((module) => module.default)
//             .then((ReactPixel) => {
//               ReactPixel.init(pixelId, undefined, options);
//               ReactPixel.track("Contact");
//             });
//         }
//         TagManager.dataLayer({
//           dataLayer: {
//             event: "waitlist_join",
//             email: email,
//           },
//         });

//         const body: makeBody = { email };
//         // const response = await fetch(makeWebhookURL, {
//         //   method: "POST",
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         //   body: JSON.stringify(body),
//         // });

//         // if (response.status === 200) {
//         //   console.log("Email submitted successfully");
//           setIsEmailSubmitted(true);
//         // }
//         if (affiliateName && affiliateName != "") {
//           // router.push("/register?" + "affiliateName=" + affiliateName);
//         } else {
//           // router.push("/register");
//         }
//       } else {
//         addError("Invalid email", "Please enter a valid email address.");
//         setEmailError(true);
//       }
//     }
//   };

  return (
    <>

        <div
          className={`[ ] relative mb-8 mt-4 box-content w-full max-w-[485px] items-center rounded-full border-[1px]  border-solid border-transparent ${emailError ? "email-error" : ""}`}
        >
          <input
            className={`[ fg-dark-24 w-full rounded-full border bg-neutral-100 py-4 pl-6 pr-20 font-sans  text-base  leading-[1.5rem] text-[#CECECE] drop-shadow-xl ${emailError ? "email-error2" : ""} ]`}
            type="text"
            // onChange={(evt) => setEmail(evt.target.value)}
            onChange={(evt) => setEmail(evt.target.value)}
            maxLength={80}
            required={true}
            placeholder={"Enter email address"}
          />
          <Link
            // onClick={(evt) => handleSubmit()}
            href='/'
            className="absolute right-0 top-0 my-2 mr-2 animate-shimmer items-center justify-center rounded-[46px] border-2 border-blue-300 bg-[linear-gradient(110deg,#076AFF,45%,#48BDFF,55%,#076AFF)] bg-[length:200%_100%] px-4 py-2 font-medium text-white"
            data-variant="gradient"
            data-size="thin"
          >
            Get early access
            </Link>
        </div>


    </>
  );
};

export default EmailCapture;

{/* const useSaveEmail = () => {
  const { addError } = useError();
  const saveEmail = async (email: string) => {
    try {
      // call the backend to create subscription
      const url = new URL("/onboarding/capture-email", baseUrl);
      let response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (response.status !== 200 && response.status !== 400) {
        // throw error
        addError("An error occured while saving your email.", "Please try again.");
      }
      const body = await response.json();
      // window.location.href = body.redirect_url;
    } catch (error) {
      addError("An error occured while saving your email.", error?.toString() ?? "");
    }
  };
  return saveEmail;
}; */}
