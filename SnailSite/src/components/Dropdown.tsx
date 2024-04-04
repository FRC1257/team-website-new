import { Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export interface DropdownProps {
  title: string;
  subtitles: SubtitleItemArray;
}

interface SubtitleItem {
  title: string;
  to: string;
  key: string;
  external?: boolean;
}
export interface SubtitleItemArray extends Array<SubtitleItem> {}

const Dropdown = ({ title, subtitles }: DropdownProps) => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex flex-wrap items-center gap-2 outline-none">
        {title}
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
      </Popover.Button>
      <Popover.Panel className="absolute top-14 right-1 z-10">
        <div className="flex flex-col text-left text-white text-md font-thin tracking-tight bg-gray-900 rounded-lg w-25">
          {subtitles.map(({ title, to, key, external }) => (
            <NavLink
              className="p-2 mx-2"
              to={to}
              key={key}
              target={external ? "_blank" : ""}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Dropdown;
