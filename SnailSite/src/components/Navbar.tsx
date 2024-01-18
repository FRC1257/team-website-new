import Dropdown, { SubtitleItemArray } from "./Dropdown";
import { Link } from "react-router-dom";

import galaxy from "./images/backgrounds/a3.png";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";

const aboutItems: SubtitleItemArray = [
  { title: "Team Info", to: "info", key: "info" },
  { title: "History", to: "history", key: "history" },
  { title: "Awards", to: "awards", key: "awards" },
  { title: "Leadership", to: "leadership", key: "leadership" },
];

const parentsItems: SubtitleItemArray = [
  { title: "Forms", to: "forms", key: "forms" },
  { title: "Wishlist", to: "wishlist", key: "wishlist" },
  { title: "Newsletter", to: "newsletter", key: "newsletter" },
];

const resourcesItems: SubtitleItemArray = [
  { title: "Documentation", to: "docs", key: "docs" },
  { title: "Handbook", to: "book", key: "book" },
];

const Navbar = () => {
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
        className="lg:text-center text-left text-white lg:text-5xl text-3xl font-bold tracking-wide lg:mt-2 m-2"
        to=""
      >
        Parallel Universe
      </Link>
      <div className="lg:hidden ml-auto">
        <Menu size={32} color="white" />
      </div>
      <div className="lg:flex hidden justify-center">
        <ul className="flex justify-between items-center gap-4 text-white text-lg font-bold">
          <li className="p-4">
            <Dropdown title="About" subtitles={aboutItems} />
          </li>
          <li className="p-4">Outreach</li>
          <li className="p-4">
            <Dropdown title="Parents" subtitles={parentsItems} />
          </li>
          <li className="p-4">
            <Dropdown title="Resources" subtitles={resourcesItems} />
          </li>
          <li className="p-4">Contact</li>
          <li className="p-4">Sponsors</li>
          <li className="p-4">
            <button className="bg-purple-800 hover:bg-purple-700 rounded-xl py-2 px-4">
              Support Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
