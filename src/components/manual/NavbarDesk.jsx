import React from "react";
import { Link } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const NavbarDesk = () => {
  return (
    <div className="bg-[#001D21] text-white rounded-4xl p-2 group-hover:block text-lg">
      <ul className="flex justify-center items-center gap-12 px-7">
        {/* Auxiliaries */}
        <li className="p-2 px-6 group relative duration-300 ease-in-out hover:bg-white hover:text-[#001D21] hover:rounded-4xl">
          <div className="flex items-center gap-1.5">
            <p className="flex items-center">Auxiliaries</p>
            <div className="relative">
              <SlArrowDown
                size={10}
                className="mt-1 absolute top-1/2 -translate-y-1/2 left-0 group-hover:opacity-0 transition-opacity duration-300"
              />
              <SlArrowUp
                size={10}
                className="mt-1 absolute top-1/2 -translate-y-1/2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Auxiliaries dropdown */}
          <div className="bg-gray-100 p-4 absolute left-auto mt-4 rounded-md hidden group-hover:block duration-300 ease-in-out">
            <div className="flex flex-col w-40">
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/"
              >
                About Us
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/"
              >
                Join With Us
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/"
              >
                Blogs
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </li>

        {/* Phases */}
        <li className="p-2 px-6 group relative duration-300 ease-in-out hover:bg-white hover:text-[#001D21] hover:rounded-4xl">
          <div className="flex items-center gap-1.5">
            <p className="flex items-center">Phases</p>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Dropdown */}
          <div className="bg-gray-100 p-4 absolute left-0 mt-4 rounded-md hidden group-hover:block duration-300 ease-in-out z-10">
            <div className="flex flex-col w-40">
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/phase1"
              >
                Phase 1
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/phase2"
              >
                Phase 2
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/phase3"
              >
                Phase 3
              </Link>
            </div>
          </div>
        </li>

        {/* Pricing */}
        <li className="p-2 px-6 duration-300 ease-in-out hover:bg-white hover:text-[#001D21] hover:rounded-4xl">
          <Link to="/pricing">Pricing</Link>
        </li>

        {/* Resources */}
        <li className="p-2 px-6 group relative duration-300 ease-in-out hover:bg-white hover:text-[#001D21] hover:rounded-4xl">
          <div className="flex items-center gap-1.5">
            <p className="flex items-center">Resources</p>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Dropdown */}
          <div className="bg-gray-100 p-4 absolute left-0 mt-4 rounded-md hidden group-hover:block duration-300 ease-in-out z-10">
            <div className="flex flex-col w-40">
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-black p-1 hover:text-[#FFFFFF] hover:font-medium duration-300 ease-in-out"
                to="/guides"
              >
                Guides
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDesk;


