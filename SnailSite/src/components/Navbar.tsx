// TODO: have child Dropdown button to collapse navbar onClick
// TOOD: add different dvh breakpoints for mobile nav

import { useState } from "react";

import Dropdown, { SubtitleItemArray } from "./Dropdown";
import { Link } from "react-router-dom";

import galaxy from "./images/backgrounds/a3.png";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";
import { Popover } from "@headlessui/react";

const aboutItems: SubtitleItemArray = [
  { title: "Team Info", to: "info", key: "info" },
  // { title: "History", to: "history", key: "history" },
  { title: "Awards", to: "awards", key: "awards" },
  { title: "Leadership", to: "leadership", key: "leadership" },
];

const parentsItems: SubtitleItemArray = [
  // { title: "Forms", to: "forms", key: "forms" },
  {
    title: "Wishlist",
    to: "https://www.amazon.com/hz/wishlist/printview/10BWUEU7XC1E1?target=_blank&ref_=lv_pv&filter=unpurchased&sort=default",
    key: "wishlist",
    external: true,
  },
  {
    title: "Newsletter",
    to: "https://frc1257.github.io/blog",
    key: "newsletter",
    external: true,
  },
];

const resourcesItems: SubtitleItemArray = [
  {
    title: "Documentation",
    to: "https://docs.google.com/document/d/161gJzyOHGn3c9_r7zEpRzqucXN_SCO8SX5lyh6rMZy0/edit?usp=sharing",
    key: "docs",
    external: true,
  },
  {
    title: "Handbook",
    to: "https://docs.google.com/document/d/19TPxdzMEWFnx3xjKsc1DgqhJ7yiGB8YVfXHIzYRunEU/edit?usp=sharing",
    key: "book",
    external: true,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav
      className="bg-cover bg-center flex lg:flex-col flex-row items-center p-4"
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      <div className="flex lg:justify-center lg:mt-4">
        <div className="bg-black rounded-full">
          <img
            className="lg:w-32 lg:h-32 w-16 h-16"
            src="pics/logos/biggerWhite.png"
            alt="Team Logo"
          />
        </div>
      </div>
      <Link
        className="lg:text-center text-left text-white lg:text-[3dvw] text-3xl font-bold tracking-wide lg:mt-2 m-2"
        to=""
      >
        Parallel Universe
      </Link>
      <div className="lg:hidden ml-auto text-white">
        <Popover>
          <Popover.Button>
            <Menu size={32} color="white" onClick={() => setOpen(!open)} />
          </Popover.Button>
          <Popover.Panel className="absolute w-full top-[20dvh] right-[0.25dvw] z-50">
            <div className="z-50 flex flex-col text-left text-white text-lg font-semibold tracking-tight bg-gray-900 rounded-lg">
              <div className="p-2 m-6">
                <Dropdown title="About" subtitles={aboutItems} />
              </div>
              <div className="p-2 m-6">
                <Link to="outreach">Outreach</Link>
              </div>
              <div className="p-2 m-6">
                <Dropdown title="Parents" subtitles={parentsItems} />
              </div>
              <div className="p-2 m-6">
                <Dropdown title="Resources" subtitles={resourcesItems} />
              </div>
              <div className="p-2 m-6">
                <Link to="/gallery">Gallery</Link>
              </div>
              <div className="p-2 m-6">
                <Link to="/sponsors">Sponsors</Link>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <div className="lg:flex hidden justify-center">
        <ul className="flex justify-between items-center gap-4 text-white text-lg font-bold">
          <li className="p-4">
            <Dropdown title="About" subtitles={aboutItems} />
          </li>
          <li className="p-4">
            <Link to="outreach">Outreach</Link>
          </li>
          <li className="p-4">
            <Dropdown title="Parents" subtitles={parentsItems} />
          </li>
          <li className="p-4">
            <Dropdown title="Resources" subtitles={resourcesItems} />
          </li>
          <li className="p-4">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li className="p-4">
            <button className="bg-secondary-700 hover:bg-secondary-600 rounded-xl py-2 px-4">
              <Link to="Support">Support Us</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
