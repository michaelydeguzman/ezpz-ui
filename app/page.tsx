import { MouseScrollButton } from "./components/buttons/mouseScrollButton/mouseScrollButton";

const TitleSection = () => {
  return (
    <div className="flex flex-col">
      <p className="text-4xl text-slate-400">
        Hi, I'm <span className="text-blue-500">Michael</span>
      </p>
      <p className="flex flex-col rounded-lg text-center text-8xl opacity-95">
        <span className="uppercase">Full-stack</span>
        <span className="mr-40 uppercase">Software </span>
        <span className="ml-40 uppercase">Developer</span>
      </p>
    </div>
  );
};

// Sections object to organize components
const Sections = {
  TitleSection,
};

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-20">
      <Sections.TitleSection />
      <MouseScrollButton />
    </div>
  );
}
