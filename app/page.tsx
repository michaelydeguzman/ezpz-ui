"use client";
import Image from "next/image";
import { SITE_TEXT } from "./lib/constants";

import { NavButton } from "./components/buttons/navButton/navButton";
import { updateNavBarOnTop } from "./redux/features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "./redux/store";
import { Logo } from "./components/logo/logo";

export default function Home() {
  const isNavBarOnTop = useAppSelector(
    (state) => state.appReducer.values.isNavBarOnTop,
  );

  const dispatch = useDispatch<AppDispatch>();

  const onClickTitle = () => {
    dispatch(updateNavBarOnTop(false));
  };

  const onClickNavButton = () => {
    dispatch(updateNavBarOnTop(true));
  };

  return (
    <div className="flex h-full w-full px-20 py-10">
      <div className="flex w-1/2 flex-col space-y-4">
        <p className="text-5xl">
          Hi! It's me <span className="text-blue-500">Michael</span> ,
        </p>
        <div className="flex w-full flex-col items-start pl-10">
          <p className="flex text-8xl">Full-Stack Software Developer</p>
        </div>
      </div>
      <div className="absolute">
        <Image />
      </div>
    </div>
  );
}
