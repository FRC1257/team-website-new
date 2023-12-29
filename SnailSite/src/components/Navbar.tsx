// TODO: ask Nat/Maia to create square SVGs/PNGs of the logo (right now it's off-center)
import Dropdown, { SubtitleItemArray } from "./Dropdown";

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
    <nav className="bg-[url('img/backgrounds/galaxy-background.png')] bg-cover bg-center flex flex-col">
      <div className="flex justify-center mt-4">
        <div className="bg-black rounded-full">
          <img
            className="w-32 h-32"
            src="img/logos/snail_white.png"
            alt="Team Logo"
          />
        </div>
      </div>
      <div className="text-center text-white text-5xl font-bold tracking-wide mt-2">
        Parallel Universe
      </div>
      <div className="flex justify-center">
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
