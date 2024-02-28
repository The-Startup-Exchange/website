import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./header";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main className="flex h-screen min-w-screen flex-col pt-8 items-center">
        <div className="h-[40rem] z-[-1] w-3/4 bg-black bg-grid-large-white/[0.1] flex items-center justify-center absolute bottom-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
        </div>
        <Header />
        <div className="flex flex-col w-3/4 h-3/4 pl-24 border-dashed border-[#414141] border-b-2 border-x-2 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col gap-y-4">
            <div
              className={`flex flex-col w-full text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold items-start justify-start lg:gap-y-2 gap-y-0 ${plus_jakarta_sans.className}`}
            >
              <div className="w-full">
                <h1>A space for student builders,</h1>
              </div>
              <div>
                <h1>makers, & creators to exchange</h1>
              </div>
              <div>
                <h1>their passions & ideas.</h1>
              </div>
            </div>
            <div
              className={`text-[#FFFFFF] text-lg font-thin leading-snug ${plus_jakarta_sans.className}`}
            >
              <div>
                Join a community of students passionate about their own ideas.
                Connect with us by
              </div>
              <div>
                joining our Discord below, or by setting up a meetup at your
                campus.
              </div>
            </div>
            <div>
              <Button variant="secondary" className="rounded-full p-6">
                JOIN THE MOVEMENT
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
