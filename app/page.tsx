"use client";

import StarryBackground from "./components/background/starryBg";
import { NavBar } from "./components/navBar/navBar";
import { Sections } from "./components/sections/sections";
import useIsMobile from "./hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <NavBar />

      {isMobile ? null : <StarryBackground />}

      <Sections />
    </div>
  );
}
