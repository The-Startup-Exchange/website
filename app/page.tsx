import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import { Badge, badgeVariants } from "@/components/ui/badge"
import Link from "next/link";
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book
} from './fonts';
import DashedDivider from "./dashedDivider";
import NextImage from "next/image";
import SiteMenu from "./siteMenu";

const programLogos = [
  { text: "Link 1", href: "/link1" },
  { text: "Link 2", href: "/link2" },
  { text: "Link 3", href: "/link3" },
  { text: "Link 4", href: "/link4" }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen min-w-screen flex-col items-center">
        <div className="h-[40rem] z-[-1] w-3/4 bg-black bg-grid-large-white/[0.1] flex items-center justify-center absolute bottom-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
        </div>
        <div className="flex flex-col w-[94%] py-56 px-12 border-[#242424] border-x items-start justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col w-full gap-y-4">
            <div
              className="flex flex-col w-full items-start justify-start lg:space-y-4 space-y-0">
              <Link href="" className={badgeVariants({ variant: "outlineimg" })}>ImmerseGT is happening this spring</Link>
                <h1 className={`text-[#FFFFFF] w-[85%] text-[70px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>The path to moving your ideas forward awaits.</h1>
                <p className={`text-[#9A9A9A] text-[24px] leading-[150%] ${plus_jakarta_sans_regular.className}`}>SX offers students the community and mentors that enable them to become full-time founders. 
                Sign up to hear about cool builders, campus communities, and upcoming events.</p>
              {/* <Button variant="secondary" className="rounded-full p-6">
                JOIN THE MOVEMENT
              </Button> */}
            </div>
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[75px] px-12 border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col w-full gap-y-24">
            <div
              className="flex flex-col w-full items-start justify-start lg:space-y-10 space-y-0">
                <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX is a community for the most ambitious college students looking to become full-time founders.</h1>
                <p className={`text-[#fff] text-[36px] leading-[150%] ${plus_jakarta_sans_medium.className}`}>Our community helps you grow from -1 to 1.</p>
            </div>
            <div
              className="flex flex-row w-full items-start justify-between lg:space-y-4 space-y-0">
                <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}> Builders in SX</h1>
                <Button variant="outline" className="rounded-xl py-3 px-5">
                  <div className={`${messina_book.className} font-bold`}>
                  VIEW ALL {'>'}
                  </div>
                </Button>
            </div>
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[75px] px-12 border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col w-full gap-y-24">
            <div
              className="flex flex-col w-full items-start justify-start lg:space-y-10 space-y-0">
                <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Participating campuses</h1>
            </div>
            <div
              className="flex flex-row w-full items-start justify-between lg:space-y-4 space-y-0">

            </div>
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[75px] border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col w-full">
            <div
              className="flex flex-col w-full px-12 items-start justify-start lg:space-y-10 space-y-0">
                <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX alumni are backed by the best.</h1>
                <h2 className={`text-[#FFFFFF] w-[85%] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>→ See what members are up to this summer.</h2>
            </div>
            <div className="flex flex-col my-[75px] border-[#323232] border-dashed border-t items-start justify-start">
              {Array.from({ length: 4 }, () => (
                <div className="flex flex-row w-full border-b border-dashed border-[#323232] items-start">
                  {programLogos.map(item => (
                    <div className="flex flex-row w-full border-r border-dashed border-[#323232] py-24 px-12 align-center items-center justify-center">
                      <Link href={item.href}>
                        <h1 className={`text-[#FFFFFF] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                          {item.text}
                        </h1>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[75px] border-[#242424] border-x items-start justify-start gap-y-4 ">
          <div className="flex flex-row px-28 items-start w-full">
            <h1 className={`text-[#FFFFFF] w-[50%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>FAQs</h1>
            <div className="flex flex-col w-full border-[#323232] border-t items-start justify-start">
              {programLogos.map(item => (
                <Link href={item.href} className="w-full">
                  <div className="flex flex-row w-full border-b border-[#323232] py-12 align-start items-start justify-start space-x-4">
                      <h1 className={`text-[#A0A0A0] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                      →
                      </h1>
                      <h1 className={`text-[#FFFFFF] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                        {item.text}
                      </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[75px] border-[#242424] border-x items-start justify-start gap-y-20">
          <div className="flex flex-row px-28 items-start w-full">
            <h1 className={`text-[#FFFFFF] w-[70%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Join the Startup Exchange community</h1>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row px-28 items-start w-full space-x-6">
              <Button variant="secondary" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
                <h1 className={`text-[#000] text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Apply to join</h1>
                <h1 className={`text-[#000] text-[16px] tracking-tighter ${messina_book.className}`}>the F24 cohort</h1>
              </Button>
              <Button variant="outline" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
                <h1 className={`text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Join our discord</h1>
                <h1 className={`text-[#7E7E7E] text-[16px] tracking-tighter ${messina_book.className}`}>for announcements</h1>
              </Button>
            </div>
            {/* <div className="flex flex-row px-28 items-start w-full space-x-6">
              <Button variant="secondary" className="rounded-xl flex-col items-center w-[272px] py-14 space-y-1.5">
                <h1 className={`text-[#000] text-[24px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>Apply to join</h1>
                <h1 className={`text-[#000] text-[16px] tracking-tighter ${messina_book.className}`}>the F24 cohort</h1>
              </Button>
            </div> */}
          </div>
        </div>
        <DashedDivider/>
        <div className="flex flex-col w-[94%] py-[52px] border-[#242424] border-x items-center justify-center">
          <div className="flex flex-col px-28 py-28 items-center align-center justify-center w-full">
            <NextImage
                    src="/sxLogo.png"
                    alt="SX Full Logo"
                    width={200}
                    height={200}
                    />
            <h1 className={`text-[#FFFFFF] text-[14px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>STARTUP EXCHANGE</h1>
          </div>
          <div className="flex flex-row w-full items-center align-center justify-center">
            <SiteMenu />
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
