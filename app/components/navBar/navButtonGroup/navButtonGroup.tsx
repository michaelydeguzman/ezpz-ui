import { FC } from "react";
import { NavButton } from "../../buttons/navButton/navButton";

interface NavButtonGroupProps {}

export const NavButtonGroup: FC<NavButtonGroupProps> = () => {
  return (
    <div className="flex space-x-24 rounded-lg bg-slate-600 bg-opacity-20 p-4 px-8 text-sm">
      <NavButton text="Work" route="/work" />
      <NavButton text="Experience" route="/experience"></NavButton>
      <NavButton text="About" route="/about" />
      <NavButton text="Contact" route="/contact" />
    </div>
  );
};
