import Image from "next/image";
import SiteMenu from "./siteMenu";
import {
    plus_jakarta_sans_extrabold
} from '../app/fonts';

const BottomMenu = () => {
    return (
        <div className="flex flex-col w-[94%] py-[52px] border-[#242424] border-x items-center justify-center">
          <div className="flex flex-col px-28 py-28 items-center align-center justify-center w-full">
            <Image
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
    )
  }
  
  export default BottomMenu;
  
  