import Link from "next/link";
import {
    plus_jakarta_sans_medium,
} from '../app/fonts';

const programLogos = [
    { text: "Link 1", href: "/link1" },
    { text: "Link 2", href: "/link2" },
    { text: "Link 3", href: "/link3" },
    { text: "Link 4", href: "/link4" }
];

const AlumniPrograms = () => {
  return (
    <div className="flex flex-col w-[94%] py-[75px] border-[#242424] border-x items-start justify-start text-6xl font-bold gap-y-4 ">
    <div className="flex flex-col w-full">
      <div
        className="flex flex-col w-full px-12 items-start justify-start lg:space-y-10 space-y-0">
          <h1 className={`text-[#FFFFFF] w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX alumni are backed by the best.</h1>
          <h2 className={`text-[#FFFFFF] w-[85%] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>→ See what members are up to this summer.</h2>
      </div>
      <div className="flex flex-col my-[75px] border-[#323232] border-dashed border-t items-start justify-start">
        {Array.from({ length: 4 }, () => (
          <div className="flex flex-row w-full border-b border-dashed border-[#323232] items-start">
            {programLogos.map(item => (
              <div className="flex flex-row w-full border-r border-dashed border-[#323232] py-24 px-12 align-center items-center justify-center">
                <Link href={item.href}>
                  <h1 className={`text-[#FFFFFF] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                    {item.text}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AlumniPrograms

