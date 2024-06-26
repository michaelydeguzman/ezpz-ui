import { FC } from "react";
import { Logo } from "../logo/logo";
import { NavButtonGroup } from "./navButtonGroup/navButtonGroup";

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
      <div className="col-span-1 flex items-center justify-end">
        <div className="flex">
          O<i className="fa-solid fa-moon"></i>
        </div>
      </div>
    </div>
  );
};
