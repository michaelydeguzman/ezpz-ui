import { SITE_TEXT, WORK_EXP } from "@/app/lib/constants";
import { FC, useRef } from "react";
import { MouseScrollButton } from "../buttons/mouseScrollButton/mouseScrollButton";
import { TechStackBar } from "../techstackBar/techstackBar";
import styles from "./sections.module.scss";

interface SectionProps {}

export const Sections: FC<SectionProps> = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleMouseButtonScrollClick = () => {
    const { current } = aboutRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-10 flex w-full flex-col">
      <div className="h-screen w-full">
        <div className="mx-auto flex h-full w-full flex-col items-center justify-center">
          <p className="mt-20 text-4xl text-slate-400">
            Hi, I&apos;m <span className="text-blue-500">Michael</span>.
          </p>
          <p className="flex flex-col rounded-lg text-center text-6xl opacity-95 sm:text-6xl md:text-8xl">
            <span className="uppercase">Full-stack</span>
            <span className="uppercase sm:mr-0 md:mr-40">Software </span>
            <span className="uppercase sm:ml-0 md:ml-40">Developer</span>
          </p>
          <div className="mt-10">
            <MouseScrollButton onClick={handleMouseButtonScrollClick} />
          </div>
        </div>
      </div>
      <div
        id="sections"
        className="flex h-screen w-screen flex-col items-center justify-center p-10 sm:flex-col sm:justify-center sm:p-10 md:flex-row md:justify-normal md:space-x-20 md:p-0"
        ref={aboutRef}
      >
        <div className="sticky top-0 flex h-full w-full justify-end sm:w-full md:w-1/2">
          <div className="sticky top-0 flex h-full w-full flex-col items-start justify-center sm:w-full md:max-w-[35rem]">
            <span className="text-left text-4xl">{SITE_TEXT.GREETING}</span>
            <p className="mt-10 rounded-lg text-left leading-normal text-slate-400">
              {SITE_TEXT.SUMMARY}
            </p>

            <TechStackBar />

            <a
              href="/files/Michael Enry De Guzman_Resume.pdf"
              download
              className="w-full md:w-fit"
            >
              <button className="mt-10 w-full flex-grow-0 rounded-full border px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 md:w-fit">
                Download My Resume
              </button>
            </a>
          </div>
        </div>
        <div
          className={`flex h-screen w-full overflow-auto sm:w-full md:h-[500px] md:w-1/2 md:justify-start ${styles.maskedBottom} mt-10 pb-10 sm:mt-10`}
        >
          <div className="mt-10 flex h-full w-full flex-col items-start sm:mt-10 sm:w-full md:mt-0 md:w-[35rem]">
            {WORK_EXP.map((exp, i) => {
              const { timeline, positions, company, techstack } = exp;

              return (
                <div
                  key={`exp_${i}`}
                  className="grid w-full cursor-pointer grid-cols-3 gap-4 rounded-lg p-4 hover:bg-slate-800 hover:bg-opacity-40"
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
  );
};
