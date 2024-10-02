"use client";
import { useRef } from "react";
import StarryBackground from "./components/background/starryBg";
import { MouseScrollButton } from "./components/buttons/mouseScrollButton/mouseScrollButton";
import { NavBar } from "./components/navBar/navBar";
import { TechStackBar } from "./components/techstackBar/techstackBar";
import styles from "./home.module.scss";
import { SITE_TEXT, WORK_EXP } from "./lib/constants";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleMouseButtonScrollClick = () => {
    const { current } = aboutRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <div className="mx-auto flex h-full flex-col items-center justify-center">
            <p className="mt-20 text-4xl text-slate-400">
              Hi, I&apos;m <span className="text-blue-500">Michael</span>.
            </p>
            <p className="flex flex-col rounded-lg text-center text-8xl opacity-95">
              <span className="uppercase">Full-stack</span>
              <span className="mr-40 uppercase">Software </span>
              <span className="ml-40 uppercase">Developer</span>
            </p>
            <div className="mt-10">
              <MouseScrollButton onClick={handleMouseButtonScrollClick} />
            </div>
          </div>
        </div>
        <div className="h-screen" ref={aboutRef}>
          <div className="flex h-full w-full items-center space-x-20">
            <div className="sticky top-0 flex h-full w-1/2 justify-end">
              <div className="sticky top-0 flex h-full max-w-[35rem] flex-col items-start justify-center">
                <span className="text-left text-4xl">{SITE_TEXT.GREETING}</span>
                <p className="mt-10 rounded-lg text-left leading-normal text-slate-400">
                  {SITE_TEXT.SUMMARY}
                </p>
                <div className="mt-10">
                  <TechStackBar />
                </div>

                <a href="/files/Michael Enry De Guzman_Resume.pdf" download>
                  <button className="mt-20 flex-grow-0 rounded-full border px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105">
                    Download My Resume
                  </button>
                </a>
              </div>
            </div>
            <div
              className={`flex h-[600px] w-1/2 justify-start overflow-auto ${styles.maskedBottom} pb-10`}
            >
              <div className="flex h-full w-[35rem] flex-col items-start">
                {WORK_EXP.map((exp, i) => {
                  const { timeline, positions, company, techstack } = exp;

                  return (
                    <div
                      key={`exp_${i}`}
                      className="grid w-full cursor-pointer grid-cols-3 rounded-lg p-4 hover:bg-slate-800 hover:bg-opacity-40"
                    >
                      <div className="col-span-1 w-full text-xs uppercase text-slate-400">
                        {timeline}
                      </div>
                      <div className="col-span-2 flex flex-col">
                        {positions.map((position, ii) => (
                          <span key={`pos_${ii}`} className="text-left text-sm">
                            {position}
                          </span>
                        ))}
                        <span className="mt-1 text-xs text-slate-400">
                          {company}
                        </span>
                        {techstack && (
                          <ul className="mt-4 flex w-full flex-wrap">
                            {techstack.map((ts, iii) => (
                              <li
                                key={`ts_${iii}`}
                                className="mr-1.5 mt-2 rounded-full bg-blue-400 bg-opacity-20 px-3 py-1 text-xs text-blue-500"
                              >
                                {ts}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
