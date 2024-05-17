import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import { Badge, badgeVariants } from "@/components/ui/badge"
import Link from "next/link";
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book
} from './fonts';
import DashedDivider from "../components/dashedDivider";
import BuildersInSX from "../components/buildersInSX";
import BottomMenu from "../components/BottomMenu";
import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import AlumniPrograms from "../components/AlumniPrograms";
import ParticipatingCampuses from "../components/ParticipatingCampuses";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen min-w-screen flex-col items-center">
        <Hero/>
        <DashedDivider/>
        <BuildersInSX/>
        <DashedDivider/>
        <ParticipatingCampuses/>
        <DashedDivider/>
        <AlumniPrograms/>
        <DashedDivider/>
        <FAQs/>
        <DashedDivider/>
        <CTA/>
        <DashedDivider/>
        <BottomMenu/>
        <Footer/>
      </main>
    </>
  );
}
