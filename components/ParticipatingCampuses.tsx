import {
    plus_jakarta_sans_medium,
} from '../app/fonts';

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

            </div>
          </div>
        </div>
    )
}
export default ParticipatingCampuses
