import React from 'react';
import Link from 'next/link';
import { messina_book, messina_semibold } from "../app/fonts";

const navItems = [
  {
    name: "COMMUNITY",
    link: "/community",
  },
  {
    name: "CAMPUSES",
    link: "/campuses",
  },
  {
    name: "EVENTS",
    link: "https://lu.ma/sxevents",
  },
  {
    name: "DONATE",
    link: "/donate",
  },
  {
    name: "BLOG",
    link: "/blog",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
];

const SiteMenu = ({ useBold = false }) => {
  const fontClass = useBold ? messina_semibold.className : messina_book.className;

  return (
    <div className="flex flex-row space-x-8 items-center">
      {navItems.map((item) => (
        item.name === "EVENTS" ? (
          <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
            <h2 className={`${fontClass} text-[15px] transition duration-500 hover:text-[#414141]`}>{item.name}</h2>
          </a>
        ) : (
          <Link key={item.link} href={item.link}>
            <h2 className={`${fontClass} text-[15px] transition duration-500 hover:text-[#414141]`}>{item.name}</h2>
          </Link>
        )
      ))}
    </div>
  );
};

export default SiteMenu;