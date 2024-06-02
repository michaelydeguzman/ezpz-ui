"use client";
import Image from "next/image";
import { SITE_TEXT } from "./lib/constants";
import { Caveat } from "next/font/google";
import { NavigationButton } from "./components/buttons/navigationButton";
import { updateNavBarOnTop } from "./redux/features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "./redux/store";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const isNavBarOnTop = useAppSelector(
    (state) => state.appReducer.value.isNavBarOnTop,
  );

  const dispatch = useDispatch<AppDispatch>();

  const onClickNavButton = () => {
    dispatch(updateNavBarOnTop(true));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div
        className={`flex w-full ${!isNavBarOnTop ? "min-h-screen flex-col items-center justify-center" : ""}`}
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div
            className={`${caveat.className} cursor-pointer text-9xl hover:scale-105 hover:text-orange-400`}
          >
            {SITE_TEXT.TITLE}
          </div>
          <div className="justify-end text-4xl uppercase">
            {SITE_TEXT.SUBTITLE}
          </div>
        </div>

        <div className="flex w-full justify-center space-x-28 pt-10">
          <NavigationButton text="About" onClick={onClickNavButton} />
          <NavigationButton text="Work" onClick={onClickNavButton} />
          <NavigationButton text="Socials" onClick={onClickNavButton} />
          <NavigationButton text="Contact" onClick={onClickNavButton} />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center space-y-8">
        <div className="w-1/2">
          <p className="mx-20">{SITE_TEXT.ABOUT}</p>
        </div>
      </div>
      <div></div>
    </main>
  );
}
