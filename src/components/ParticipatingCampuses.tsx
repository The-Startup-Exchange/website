import {
    plus_jakarta_sans_medium,
    plus_jakarta_sans_extrabold
} from '../app/fonts';
import { AnimatedTooltip } from './ui/animated-tooltip';
import Link from "next/link";
import Image from "next/image";
import Images from '../assets/images';

const campuses = [
  {
    name: 'Startup Exchange at Georgia Tech',
    pictureName: '/participatingCampuses/sundaysUIUC.png',
    logoName: '/colleges/uiuc.png',
    description: 'the community for artists, founders, and creatives at UIUC.',
    link: 'https://lu.ma/buildillinois',
    items: [
      {
        id: 1,
        name: 'Ishan',
        designation: 'CS @ UIUC',
        image: Images.ishan,
        socialsLink: 'https://x.com/_ishand_',
      },
      {
        id: 2,
        name: 'Aryan',
        designation: 'CS @ UIUC',
        image: Images.aryan,
        socialsLink: 'https://x.com/Aryan_Gandhi101',
      },
      {
        id: 3,
        name: 'Keshav',
        designation: 'CS @ UIUC',
        image: Images.keshav,
        socialsLink: 'https://x.com/krimson_wings',
      },
    ],
  },
  {
    name: 'buildIllinois',
    pictureName: '/participatingCampuses/sundaysUIUC.png',
    logoName: '/colleges/uiuc.png',
    description: 'the community for artists, founders, and creatives at UIUC.',
    link: 'https://lu.ma/buildillinois',
    items: [
      {
        id: 1,
        name: 'Ishan',
        designation: 'CS @ UIUC',
        image: Images.ishan,
        socialsLink: 'https://x.com/_ishand_',
      },
      {
        id: 2,
        name: 'Aryan',
        designation: 'CS @ UIUC',
        image: Images.aryan,
        socialsLink: 'https://x.com/Aryan_Gandhi101',
      },
      {
        id: 3,
        name: 'Keshav',
        designation: 'CS @ UIUC',
        image: Images.keshav,
        socialsLink: 'https://x.com/krimson_wings',
      },
    ],
  },
  {
    name: 'buildIllinois3',
    pictureName: '/participatingCampuses/sundaysUIUC.png',
    logoName: '/colleges/uiuc.png',
    description: 'the community for artists, founders, and creatives at UIUC.',
    link: 'https://lu.ma/buildillinois',
    items: [
      {
        id: 1,
        name: 'Ishan',
        designation: 'CS @ UIUC',
        image: Images.ishan,
        socialsLink: 'https://x.com/_ishand_',
      },
      {
        id: 2,
        name: 'Aryan',
        designation: 'CS @ UIUC',
        image: Images.aryan,
        socialsLink: 'https://x.com/Aryan_Gandhi101',
      },
      {
        id: 3,
        name: 'Keshav',
        designation: 'CS @ UIUC',
        image: Images.keshav,
        socialsLink: 'https://x.com/krimson_wings',
      },
    ],
  },
  {
    name: 'buildIllinois4',
    pictureName: '/participatingCampuses/sundaysUIUC.png',
    logoName: '/colleges/uiuc.png',
    description: 'the community for artists, founders, and creatives at UIUC.',
    link: 'https://lu.ma/buildillinois',
    items: [
      {
        id: 1,
        name: 'Ishan',
        designation: 'CS @ UIUC',
        image: Images.ishan,
        socialsLink: 'https://x.com/_ishand_',
      },
      {
        id: 2,
        name: 'Aryan',
        designation: 'CS @ UIUC',
        image: Images.aryan,
        socialsLink: 'https://x.com/Aryan_Gandhi101',
      },
      {
        id: 3,
        name: 'Keshav',
        designation: 'CS @ UIUC',
        image: Images.keshav,
        socialsLink: 'https://x.com/krimson_wings',
      },
    ],
  },
];

const ParticipatingCampuses = () => {
  const numRows = Math.ceil(campuses.length / 2);
  
  return (
    <div className="flex flex-col w-[94%] py-[75px] px-12 border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
      <div className="flex flex-col w-full gap-y-24">
        <div className="flex flex-col w-full items-start justify-start lg:space-y-10 space-y-0">
            <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Participating campuses</h1>
        </div>
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div className="flex flex-row w-full justify-between">
            {campuses.slice(rowIndex * 2, (rowIndex + 1) * 2).map((campus, index) => (
              <Link href={campus.link} className="hover:bg-[#242424] hover:bg-opacity-80 p-6 rounded-xl transition duration-500 flex-1">
                <div className={`flex flex-row w-full items-start justify-center ${rowIndex % 2 === 0 ? 'space-x-12' : 'space-x-reverse space-x-12'}`}>
                  {rowIndex % 2 === 0 ? (
                    <>
                      <Image src={Images.uiuc_sundays} alt="uiuc_sundays" width={225} height={225}/>
                      <div className="flex flex-col space-y-4">
                        <Image src={Images.uiuc} alt="uiuc" width={100} height={27}/>
                        <h1 className={`text-[#FFFFFF] w-[85%] text-[32px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>{campus.name}</h1>
                        <h1 className={`text-[#FFFFFF] w-[85%] text-[16px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>{campus.description}</h1>
                        <AnimatedTooltip items={campus.items.map(item => ({ ...item, image: item.image.src }))}/>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col space-y-4">
                        <Image src={Images.uiuc} alt="uiuc" width={100} height={27}/>
                        <h1 className={`text-[#FFFFFF] w-[85%] text-[32px] leading-[125%] ${plus_jakarta_sans_extrabold.className}`}>{campus.name}</h1>
                        <h1 className={`text-[#FFFFFF] w-[85%] text-[16px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>{campus.description}</h1>
                        <AnimatedTooltip items={campus.items.map(item => ({ ...item, image: item.image.src }))}/>
                      </div>
                      <Image src={Images.uiuc_sundays} alt="uiuc_sundays" width={225} height={225}/>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
);
}
export default ParticipatingCampuses
