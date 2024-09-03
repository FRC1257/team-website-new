import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropdownProps } from "./Dropdown";

interface DropdownMobileProps extends DropdownProps {
  outerNav: () => void;
}

const DropdownMobile = ({
  title,
  subtitles,
  outerNav,
}: DropdownMobileProps) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleInnerNav = () => {
    setOpenNav(!openNav);
    outerNav();
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center" onClick={() => setOpenNav(!openNav)}>
        <p>{title}</p>
        <button className="block md:hidden border-black p-2 rounded text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          openNav ? "" : "hidden"
        } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
      >
        {subtitles.map(({ title, to, key, external }) => (
          <NavLink
            className="p-2 mx-2"
            to={to}
            key={key}
            target={external ? "_blank" : ""}
            onClick={() => toggleInnerNav()}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropdownMobile;
