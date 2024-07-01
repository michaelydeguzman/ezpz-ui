"use client";
import React from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { SITE_TEXT } from "@/app/lib/constants";

interface MainHeaderProps {
  // title: string | React.ReactNode;
  // subtitle: string | React.ReactNode;
  // isOnTop: boolean | undefined;
  // onClick: () => void;
}
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const Logo: React.FC<MainHeaderProps> = (
  {
    // title,
    // subtitle,
    // isOnTop = false,
    // onClick,
  },
) => {
  const onLogoClick = () => {};

  return (
    <>
      {/* <motion.div
        className="flex w-1/2 flex-col items-center justify-center space-y-2"
        initial={{ y: 50, opacity: 0 }} // Initial state
        animate={{
          y: [50, 0, -200],
          opacity: [0, 1, 0],
        }}
        transition={{
          y: { duration: 3, ease: "easeInOut" }, // Total duration and easing for y-axis
          opacity: { duration: 3, ease: "easeInOut" }, // Total duration and easing for opacity
        }}
      > */}
      <div
        className={`${inter.className} flex cursor-pointer space-x-1 text-sm transition-all duration-300 ease-in-out hover:scale-105`}
        onClick={onLogoClick}
      >
        <div className="rounded-xl border-2 border-white px-2 transition-all duration-300 ease-in-out hover:border-blue-500 hover:text-blue-500">
          Michael De Guzman
        </div>
        <div className="text-xs">TM</div>
      </div>
      {/* <div className={`"text-2xl" justify-end uppercase`}>
        {SITE_TEXT.SUBTITLE}
      </div> */}
      {/* </motion.div> */}
    </>
  );
};
