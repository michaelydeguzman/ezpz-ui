"use client";

import StarryBackground from "./components/background/starryBg";
import { NavBar } from "./components/navBar/navBar";
import { Sections } from "./components/sections/sections";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <NavBar />
      <StarryBackground />
      <Sections />
    </div>
  );
}
