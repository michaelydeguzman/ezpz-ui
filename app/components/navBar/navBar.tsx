"use client";
import { FC } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="fixed top-4 z-20 h-[5rem] w-full">
      <div className={`grid h-full w-full grid-cols-1 items-center px-20`}>
        {/* <div className="col-span-1 flex items-center justify-start">
        <Logo />
      </div> */}
        {/* <div className="col-span-1 flex items-center justify-center">
        <NavButtonGroup />
      </div> */}
        <div className="col-span-1 flex items-center justify-end space-x-8">
          <a
            href="https://github.com/michaelydeguzman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:scale-110" />
          </a>
          {/* <FaInstagram className="cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:scale-110" /> */}
        </div>
      </div>
    </div>
  );
};
