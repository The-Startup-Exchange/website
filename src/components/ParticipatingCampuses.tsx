import {
    plus_jakarta_sans_medium,
} from '../app/fonts';
import { AnimatedTooltip } from './ui/animated-tooltip';

const campuses = [
  {
    name: 'buildIllinois',
    pictureName: '/participatingCampuses/sundaysUIUC.png',
    logoName: '/colleges/uiuc.png',
    description: 'the community for artists, founders, and creatives at UIUC.',
    link: 'https://lu.ma/buildillinois',
    person1Image: '/organizers/ishan.png',
    person1Link: 'https://x.com/_ishand_',
    person2Image: '/organizers/aryan.png',
    person2Link: 'https://x.com/Aryan_Gandhi101',
    person3Image: '/organizers/keshav.png',
    person3Link: 'https://x.com/krimson_wings',
  },
];

const ParticipatingCampuses = () => {
    return (
        <div className="flex flex-col w-[94%] py-[75px] px-12 border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
          <div className="flex flex-col w-full gap-y-24">
            <div
              className="flex flex-col w-full items-start justify-start lg:space-y-10 space-y-0">
                <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>Participating campuses</h1>
            </div>
            <div
              className="flex flex-row w-full items-start justify-between lg:space-y-4 space-y-0">
                <AnimatedTooltip items={campuses}/>
            </div>
          </div>
        </div>
    )
}
export default ParticipatingCampuses
