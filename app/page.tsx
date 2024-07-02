import StarryBackground from "./components/background/starryBg";
import { NavBar } from "./components/navBar/navBar";
import { Sections } from "./components/sections";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div className="fixed top-4 z-20 h-[5rem] w-full">
        <NavBar />
      </div>
      <div className="absolute left-0 top-0 z-0 h-screen w-full">
        <StarryBackground />
      </div>
      <div className="relative z-10 flex w-full flex-col">
        <div className="h-screen">
          <Sections.Landing />
        </div>
        <div className="h-screen">
          <Sections.Experience />
        </div>
      </div>
    </div>
  );
}
