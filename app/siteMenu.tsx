import React from 'react';
import Link from 'next/link';
import { messina_book, messina_semibold } from "./fonts";

const navItems = [
  {
    name: "COMMUNITY",
    link: "/community",
  },
  {
    name: "CHAPTERS",
    link: "/chapters",
  },
  {
    name: "EVENTS",
    link: "/events",
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
        <Link key={item.link} href={item.link}>
          <h2 className={`${fontClass} text-[15px] transition duration-500 hover:text-[#414141]`}>{item.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default SiteMenu;