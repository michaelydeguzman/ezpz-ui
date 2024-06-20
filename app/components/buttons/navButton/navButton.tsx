"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavButtonProps {
  text: string;
  route: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ text, route }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const onClickNavButton = () => {};

  return (
    <motion.div
      className="flex w-fit flex-col"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="cursor-pointer" onClick={onClickNavButton}>
        {text}
      </div>
      <div
        className={`rounded-lg border-t-2 border-white transition-all duration-300 ease-in-out ${hovered ? "w-full" : "w-0"}`}
      ></div>
    </motion.div>
  );
};
