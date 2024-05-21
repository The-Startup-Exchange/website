import {
  plus_jakarta_sans_medium,
  plus_jakarta_sans_extrabold
} from '../../app/fonts';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import Link from "next/link";
import Image from "next/image";
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';
import { campuses } from '../../data/campusesData';

const ParticipatingCampuses = () => {
const { theme, styles } = useTheme();
return (
  <div className={`flex flex-col w-full ${styles.backgroundColor} ${styles.textColor} gap-y-4`}>
    <div className={`flex flex-col md:mx-11 mx-5 px-12 py-[75px] border-x ${styles.borderColor} gap-y-24`}>
      <div className="flex flex-col w-full items-start justify-start lg:space-y-10 space-y-0">
          <h1 className={`md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Participating campuses</h1>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap w-full space-y-12">
        {campuses.map((campus, index) => (
          <div key={index} className="flex flex-col md:w-1/2 w-full justify-between">
            <Link href={campus.link} className={`${theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-[#ececec]'} hover:bg-opacity-80 p-6 rounded-xl transition duration-500 flex-1`}>
              <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} w-full items-start justify-center md:space-x-12 space-x-0 space-y-8 md:space-y-0`}>
                <Image src={campus.pictureName} alt="organizers" width={225} height={225} objectFit="cover"/>
                <div className="flex flex-col space-y-4">
                  <Image src={theme === 'light' ? campus.blackLogo : campus.logo} alt="logo" width={54} height={54}/>
                  <h1 className={`w-[85%] text-[32px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>{campus.name}</h1>
                  <h1 className={`w-[85%] text-[16px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>{campus.description}</h1>
                  <AnimatedTooltip items={campus.items.map(item => ({ ...item, image: item.image.src }))}/>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default ParticipatingCampuses