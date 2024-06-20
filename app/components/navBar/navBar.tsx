import { FC } from "react";
import { NavButton } from "../buttons/navButton/navButton";
import { Logo } from "../logo/logo";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="flex h-full w-full items-center justify-between px-20 py-10">
      <Logo />
      <div className="flex space-x-10 text-lg">
        <NavButton text="About" route="/about" />
        <NavButton text="Work" route="/work" />
        <NavButton text="Socials" route="/socials" />
        <NavButton text="Contact" route="/contact" />
      </div>
    </div>
  );
};
