"use client";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";

interface MouseScrollButtonProps {
  // title: string | React.ReactNode;
  // subtitle: string | React.ReactNode;
  // isOnTop: boolean | undefined;
  // onClick: () => void;
}

export const MouseScrollButton: React.FC<MouseScrollButtonProps> = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }} // Animate the y-axis to create a bobbing effect
      transition={{
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop", // Loop the animation
        duration: 2, // Duration of the animation cycle
      }}
    >
      <div className="flex cursor-pointer flex-col items-center justify-center rounded-full pt-3">
        <BsMouse className="text-6xl text-slate-400 opacity-40" />
        <MdOutlineArrowDropDown className="text-4xl text-slate-400 opacity-40" />
      </div>
    </motion.div>
  );
};
