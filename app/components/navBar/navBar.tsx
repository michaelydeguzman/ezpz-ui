import { FC } from "react";
import { Logo } from "../logo/logo";
import { NavButtonGroup } from "./navButtonGroup/navButtonGroup";
import { FaGithub, FaInstagram } from "react-icons/fa";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="grid h-full w-full grid-cols-3 items-center p-10">
      <div className="col-span-1 flex items-center justify-start">
        <Logo />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <NavButtonGroup />
      </div>
      <div className="col-span-1 flex items-center justify-end space-x-8">
        <FaGithub className="cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:scale-110" />
        <FaInstagram className="cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:scale-110" />
      </div>
    </div>
  );
};
