import { FC, useEffect, useState } from "react";
import { NavButton } from "../../buttons/navButton/navButton";

interface NavButtonGroupProps {}

export const NavButtonGroup: FC<NavButtonGroupProps> = () => {
  const [isAtTop, setIsAtTop] = useState<Boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex space-x-24 rounded-lg bg-slate-800 p-4 px-8 text-sm ${
        isAtTop ? "bg-opacity-0" : "bg-opacity-70"
      } transition-all duration-300 ease-in-out`}
    >
      <NavButton text="About" route="/about" />
      <NavButton text="Experience" route="/experience"></NavButton>
      <NavButton text="Projects" route="/contact" />
    </div>
  );
};
