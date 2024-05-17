import Link from "next/link";
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_regular
} from '../app/fonts';
import { Badge, badgeVariants } from "@/components/ui/badge"


const Hero = () => {
    return (
        <div className="flex flex-col w-[94%]">
            <div className="h-[40rem] z-[-1] w-3/4 bg-black bg-grid-large-white/[0.1] flex items-center justify-center absolute bottom-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
            </div>
            <div className="flex flex-col py-56 px-12 border-[#242424] border-x items-start justify-center text-6xl font-bold gap-y-4 ">
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
        </div>
    )
}

export default Hero

