import Image from "next/image";
import Images from '../../assets/images';
import SiteMenu from "../siteMenu";
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold
} from '../../app/fonts';

const BottomMenu = () => {
  const { theme, styles } = useTheme();
    return (
        <div className={`flex flex-col w-[100%] ${styles.textColor} ${styles.backgroundColor}`}>
          <div className={`${styles.borderColor} mx-11 py-[52px] border-x`}>
            <div className={`flex flex-col px-28 py-28 items-center align-center justify-center`}>
              <Image
                  src={theme === 'dark' ? Images.sxLogo : Images.sxLogoBlack}
                  alt="SX Full Logo"
                  width={200}
                  height={200}
              />
              <h1 className={`text-[14px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>STARTUP EXCHANGE</h1>
            </div>
            <div className="flex flex-row w-full items-center align-center justify-center">
              <SiteMenu />
            </div>
          </div>
        </div>
    )
  }
  
  export default BottomMenu;
  
  