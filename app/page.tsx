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
    <div className="flex h-full w-full items-center justify-center">
      {/* <Logo
        title={SITE_TEXT.TITLE}
        subtitle={SITE_TEXT.SUBTITLE}
        isOnTop={isNavBarOnTop}
        onClick={onClickTitle}
      /> */}
    </div>
  );
}
