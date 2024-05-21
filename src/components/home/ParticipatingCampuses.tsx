import {
  plus_jakarta_sans_medium,
  plus_jakarta_sans_extrabold,
  messina_book,
  messina_light
} from '../../app/fonts';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import Link from "next/link";
import Image from "next/image";
import Images from '../../assets/images';
import { Button } from '../ui/button';
import { useTheme } from '../../context/ThemeContext';
import { campuses } from '../../data/campusesData';

interface Campus {
  orgName: string;
  campusName: string;
}

const ParticipatingCampuses = () => {
  const { theme, styles } = useTheme();
  const newCampuses: Campus[] =[
    {
      orgName: 'Startup Exchange at Cal',
      campusName: 'University of California, Berkeley',
    },
    {
      orgName: 'Startup Exchange at Columbia',
      campusName: 'Columbia University',
    },
    {
      orgName: 'Startup Exchange at UCF',
      campusName: 'University of Central Florida',
    },
  ];

  return (
    <div className={`flex flex-col w-full ${styles.backgroundColor} ${styles.textColor} gap-y-4`}>
      <div className={`flex flex-col md:mx-11 mx-5 px-12 py-[75px] border-x ${styles.borderColor} md:gap-y-20 gap-y-12`}>
        <div
          className="flex flex-row w-full justify-between align-center items-center">
          <h1 className={`${styles.textColor} md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}> Participating campuses</h1>
          <Button href="/community" variant="outline" className={`py-3 px-5  ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
            <div className={`${messina_book.className} font-bold`}>
            VIEW ALL {'>'}
            </div>
          </Button>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap w-full space-y-12 md:space-y-0">
          {campuses.map((campus, index) => (
            <div key={index} className="flex flex-col md:w-1/2 w-full justify-between">
              <Link href={campus.link} className={`${theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-[#ececec]'} hover:bg-opacity-80 p-6 rounded-xl transition duration-500 flex-1`}>
                <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} w-full items-start justify-center md:space-x-12 space-x-0 space-y-8 md:space-y-0`}>
                  <Image src={campus.pictureName} alt="organizers" width={225} height={225} objectFit="cover" className="w-full md:w-[30%]"/>
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
        <div className="flex flex-col w-full">
          <div className="items-start pb-4">
              <p className={`${messina_light.className}`}>Coming this fall</p>
          </div>
          <div className={`flex flex-col w-full ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-t items-start justify-start`}>
            {newCampuses.map((campus, index) => (
              <div key={index} className={`flex md:flex-row flex-col space-y-3 md:space-y-0 w-full py-8 border-b md:align-center md:items-center ${theme === 'dark' ? 'border-[#242424]' : 'border-[#e0e0e0]'} justify-between`}>
                <h1 className={`${styles.textColor} md:text-[24px] text-[20px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>{campus.orgName}</h1>
                <h1 className={`${styles.textColor} md:text-[16px] text-[13px] leading-[125%] ${messina_light.className}`}>{campus.campusName}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParticipatingCampuses