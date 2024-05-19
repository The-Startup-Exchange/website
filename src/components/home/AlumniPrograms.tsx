import Link from "next/link";
import Image from "next/image";
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_medium,
} from '../../app/fonts';

const programLogos = [
    { name: "forbes", href: "https://forbes.com/" },
    { name: "buildspace", href: "https://buildspace.so/" },
    { name: "kleinerPerkins", href: "https://fellows.kleinerperkins.com/" },
    { name: "contrary", href: "https://www.contrary.com/partners" },

    { name: "zfellows", href: "https://www.zfellows.com/" },
    { name: "eightVC", href: "https://www.8vc.com/fellowships" },
    { name: "antler", href: "https://www.antler.co/" },
    { name: "commit", href: "" },

    { name: "neo", href: "https://neo.com/" },
    { name: "ondeck", href: "https://www.beondeck.com/" },
    { name: "reactor", href: "https://www.floodgate.com/" },
    { name: "unusual", href: "https://www.unusual.vc/" },
];

const AlumniPrograms = () => {
    const numRows = Math.ceil(programLogos.length / 4);
    const { theme, styles } = useTheme();
    return (
      <div className={`flex flex-col w-full ${styles.backgroundColor} ${styles.textColor} gap-y-4`}>
        <div className={`flex flex-col mx-11 py-[75px] ${styles.borderColor} border-x`}>
          <div className="flex flex-col w-full px-12 items-start justify-start lg:space-y-10 space-y-0">
            <h1 className={`w-[85%] text-[58px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX alumni are backed by the best.</h1>
            <h2 className={`w-[85%] text-[24px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>→ See what members are up to this summer.</h2>
          </div>
          <div className={`flex flex-col my-[75px] ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-[#242424] border-dashed border-t items-start justify-start`}>
            {Array.from({ length: numRows }, (_, rowIndex) => (
              <div className={`flex flex-row w-full border-b border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'}`}>
                {programLogos.slice(rowIndex * 4, (rowIndex + 1) * 4).map(item => (
                  <div className={`flex flex-row w-full border-r border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} py-24 px-12 align-center items-center justify-center`}>
                    <Link href={item.href}>
                      <Image
                        src={Images[item.name]}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="opacity-80 hover:opacity-100 transition duration-500"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default AlumniPrograms;

