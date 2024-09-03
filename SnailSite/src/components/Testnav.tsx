import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TestNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenAvatarDropdown(false);
  };

  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Event
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Registration
        </NavLink>
      </>
    );
  };

  return (
    <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="https://placehold.co/600x400" className="text-2xl font-semibold text-gray-800">
            <img className="w-20" src="https://placehold.co/600x400" alt="" />
          </a>
          <button
            onClick={toggleNav}
            className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
          >
            <svg
              className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
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
    </header>
  );
};

export default TestNav;
