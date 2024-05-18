import { StaticImageData } from 'next/image';

import darkMode from './icons/dark.png';
import lightMode from './icons/light.png';
import discord from './icons/discord.png';
import instagram from './icons/instagram.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';

import eightVC from './alumniPrograms/8vc.png';
import antler from './alumniPrograms/antler.png';
import buildspace from './alumniPrograms/buildspace.png';
import commit from './alumniPrograms/commit.png';
import contrary from './alumniPrograms/contrary.png';
import forbes from './alumniPrograms/forbes.png';
import kleinerPerkins from './alumniPrograms/kp.png';
import neo from './alumniPrograms/neo.png';
import ondeck from './alumniPrograms/ondeck.png';
import reactor from './alumniPrograms/reactor.png';
import unusual from './alumniPrograms/unusual.png';
import zfellows from './alumniPrograms/zfellows.png';

import uiuc from './colleges/uiuc.png';

import aryan from './organizers/aryan.jpeg';
import ishan from './organizers/ishan.jpeg';
import keshav from './organizers/keshav.jpeg';

import uiuc_sundays from './participatingCampuses/uiuc_sundays.png';

import sx_full_logo from './sxLogos/sx-full-logo.png';
import sxLogo from './sxLogos/sxLogo.png';

type ImagesType = {
    [key: string]: StaticImageData;
    darkMode: StaticImageData;
    lightMode: StaticImageData;
    discord: StaticImageData;
    instagram: StaticImageData;
    linkedin: StaticImageData;
    twitter: StaticImageData;
    eightVC: StaticImageData;
    antler: StaticImageData;
    buildspace: StaticImageData;
    commit: StaticImageData;
    contrary: StaticImageData;
    forbes: StaticImageData;
    kleinerPerkins: StaticImageData;
    neo: StaticImageData;
    ondeck: StaticImageData;
    reactor: StaticImageData;
    unusual: StaticImageData;
    zfellows: StaticImageData;
    uiuc: StaticImageData;
    aryan: StaticImageData;
    ishan: StaticImageData;
    keshav: StaticImageData;
    uiuc_sundays: StaticImageData;
    sx_full_logo: StaticImageData;
    sxLogo: StaticImageData;
};


const Images: ImagesType = {
    darkMode,
    lightMode,
    discord,
    instagram,
    linkedin,
    twitter,
    eightVC,
    antler,
    buildspace,
    commit,
    contrary,
    forbes,
    kleinerPerkins,
    neo,
    ondeck,
    reactor,
    unusual,
    zfellows,
    uiuc,
    aryan,
    ishan,
    keshav,
    uiuc_sundays,
    sx_full_logo,
    sxLogo,
};

export default Images;