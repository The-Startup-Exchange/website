import Link from "next/link";
import {
    plus_jakarta_sans_medium
} from '../app/fonts';

const faqs = [
    { text: "Link 1", href: "/link1" },
    { text: "Link 2", href: "/link2" },
    { text: "Link 3", href: "/link3" },
    { text: "Link 4", href: "/link4" }
];

const FAQs = () => {
  return (
    <div className="flex flex-col w-[94%] py-[75px] border-[#242424] border-x items-start justify-start gap-y-4 ">
    <div className="flex flex-row px-28 items-start w-full">
      <h1 className={`text-[#FFFFFF] w-[50%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>FAQs</h1>
      <div className="flex flex-col w-full border-[#323232] border-t items-start justify-start">
        {faqs.map(item => (
          <Link href={item.href} className="w-full">
            <div className="flex flex-row w-full border-b border-[#323232] py-12 align-start items-start justify-start space-x-4">
                <h1 className={`text-[#A0A0A0] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                →
                </h1>
                <h1 className={`text-[#FFFFFF] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                  {item.text}
                </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default FAQs

