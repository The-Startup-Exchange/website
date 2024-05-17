import { Button } from "@/components/ui/button";
import {
    plus_jakarta_sans_medium,
    messina_book
} from '../app/fonts';

const BuildersInSX = () => {
  return (
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
  )
}

export default BuildersInSX

