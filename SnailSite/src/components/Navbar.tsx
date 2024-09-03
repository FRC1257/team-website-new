import { useState } from "react";

import Dropdown, { SubtitleItemArray } from "./Dropdown";
import { Link, NavLink } from "react-router-dom";

import galaxy from "./images/backgrounds/a3.png";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";
import { Cross } from "@emotion-icons/icomoon/Cross";
import DropdownMobile from "./DropdownMobile";

const aboutItems: SubtitleItemArray = [
  { title: "Team Info", to: "info", key: "info" },
  { title: "Awards", to: "awards", key: "awards" },
  { title: "Leadership", to: "leadership", key: "leadership" },
];

const parentsItems: SubtitleItemArray = [
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

// https://coderomayer.medium.com/building-a-responsive-navbar-with-dropdowns-in-react-using-tailwind-css-8891c2354279
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = () => {
    return (
      <>
        <DropdownMobile
          title="About"
          subtitles={aboutItems}
          outerNav={() => toggleNav()}
        />
        <NavLink to="/outreach" onClick={() => toggleNav()}>
          Outreach
        </NavLink>
        <DropdownMobile
          title="Parents"
          subtitles={parentsItems}
          outerNav={() => toggleNav()}
        />
        <DropdownMobile
          title="Resources"
          subtitles={resourcesItems}
          outerNav={() => toggleNav()}
        />
        <NavLink to="/gallery" onClick={() => toggleNav()}>
          Gallery
        </NavLink>
        <NavLink to="/sponsors" onClick={() => toggleNav()}>
          Sponsors
        </NavLink>
      </>
    );
  };

  return (
    <div>
      {/* mobile nav */}
      <nav
        className="lg:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${galaxy})` }}
      >
        <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="flex lg:justify-center lg:mt-4">
                <div className="bg-black rounded-full">
                  <img
                    className="lg:w-32 lg:h-32 w-10 h-10"
                    src="pics/logos/biggerWhite.png"
                    alt="Team Logo"
                  />
                </div>
              </div>
              <Link
                className="lg:text-center text-left text-white lg:text-[3dvw] text-xl font-bold tracking-wide lg:mt-2 m-2"
                to=""
              >
                Parallel Universe
              </Link>
            </div>
            <button
              onClick={toggleNav}
              className="block md:hidden border border-gray-600 p-2 rounded text-gray-600"
            >
              <div className={`${openNav ? "hidden" : "block"}`}>
                <Menu size={24} />
              </div>
              <div className={`${openNav ? "block" : "hidden"}`}>
                <Cross size={24} />
              </div>
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">{navList()}</nav>
          <div
            className={`${
              openNav ? "" : "hidden"
            } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
          >
            {navList()}
          </div>
        </div>
      </nav>
      {/* desktop nav */}
      <nav
        className="bg-cover bg-center lg:flex hidden lg:flex-col flex-row items-center p-4"
        style={{ backgroundImage: `url(${galaxy})` }}
      >
        <div className="flex lg:justify-center lg:mt-4">
          <div className="bg-black rounded-full">
            <img
              className="lg:w-32 lg:h-32 w-10 h-10"
              src="pics/logos/biggerWhite.png"
              alt="Team Logo"
            />
          </div>
        </div>
        <Link
          className="lg:text-center text-left text-white lg:text-[3dvw] text-xl font-bold tracking-wide lg:mt-2 m-2"
          to=""
        >
          Parallel Universe
        </Link>
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
    </div>
  );
};

export default Navbar;
