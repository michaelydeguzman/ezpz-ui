import { Caveat_Brush, Inter } from "next/font/google";
import Image from "next/image";
import StarryBackground from "./components/background/starryBg";
import { MouseScrollButton } from "./components/buttons/mouseScrollButton/mouseScrollButton";
import { NavButton } from "./components/buttons/navButton/navButton";
import { NavBar } from "./components/navBar/navBar";
import { TechStackBar } from "./components/techstackBar/techstackBar";
import { WORK_EXP } from "./lib/constants";

const Landing = () => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <p className="text-4xl text-slate-400">
        Hi, I'm <span className="text-blue-500">Michael</span>.
      </p>
      <p className="flex flex-col rounded-lg text-center text-8xl opacity-95">
        <span className="uppercase">Full-stack</span>
        <span className="mr-40 uppercase">Software </span>
        <span className="ml-40 uppercase">Developer</span>
      </p>
      <div className="mt-10">
        <MouseScrollButton />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex w-full flex-col">
        <div className="mx-auto flex h-full space-x-20">
          <div className="flex items-start justify-center rounded-lg"></div>
          <div className="flex h-full flex-col items-start justify-center">
            {/* <div className="flex items-center space-x-9">
              <Image
                src="/images/jedi.jpg"
                alt="about image"
                width={100}
                height={100}
                className="ml-[-140px] rounded-full"
              />
            </div> */}
            <span className="text-left text-4xl">Nice to meet you.</span>
            <p className="mt-10 max-w-[40rem] rounded-lg text-left text-slate-400">
              I am a Microsoft Certified Software Developer with 11+ years of
              experience in website, desktop application, solution integration &
              API development. I started initially as a back-end developer in
              2013 for tech companies in the Philippines. Around 2017, I
              developed a passion for learning UI/UX design & writing clean,
              responsive & scalable front-end code.
            </p>
            <div className="mt-10">
              <TechStackBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex w-full flex-col">
        <div className="mx-auto flex h-full space-x-20">
          <div className="flex h-full w-[550px] flex-col items-start justify-center space-y-6">
            {WORK_EXP.map((exp, i) => {
              const { timeline, positions, company } = exp;

              return (
                <div id={`exp_${i}`} className="grid w-full grid-cols-3">
                  <div className="col-span-1 w-full text-sm uppercase text-slate-500">
                    {timeline}
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <>
                      {positions.map((pos, ii) => (
                        <span id={`pos_${ii}`} className="text-left">
                          {pos}
                        </span>
                      ))}
                    </>

                    <span className="text-slate-500">{company}</span>
                    {/* <p className="mt-4 max-w-[40rem] rounded-lg text-left text-slate-400">
    Summary
  </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sections object to organize components
const Sections = {
  Landing,
  About,
  Experience,
};

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
          <Sections.About />
        </div>
        <div className="h-screen">
          <Sections.Experience />
        </div>
      </div>
    </div>
  );
}
