"use client";
import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiCsharp } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import cn from "classnames";

interface TechStackBarProps {
  // title: string | React.ReactNode;
  // subtitle: string | React.ReactNode;
  // isOnTop: boolean | undefined;
  // onClick: () => void;
}

export const TechStackBar: React.FC<TechStackBarProps> = () => {
  const icons = [
    { icon: <FaHtml5 className="text-6xl text-orange-400" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-6xl text-blue-400" />, label: "CSS" },
    {
      icon: <SiJavascript className="text-6xl text-yellow-400" />,
      label: "JavaScript",
    },
    { icon: <FaReact className="text-6xl text-blue-400" />, label: "React" },
    {
      icon: <RiNextjsFill className="text-6xl text-blue-950" />,
      label: "Next.JS",
    },
    { icon: <SiCsharp className="text-6xl text-purple-800" />, label: "C#" },
  ];

  const iconList = [...icons]; // Duplicate the icons for a seamless loop
  const totalItems = iconList.length;

  return (
    <div className={styles.scroller}>
      {iconList.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          style={{
            animationDelay: `calc(${30}s / ${totalItems} * (${totalItems} - ${index}) * -1)`,
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
