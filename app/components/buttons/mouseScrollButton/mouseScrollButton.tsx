import { BsMouse } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const MouseScrollButton = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-full bg-slate-500 bg-opacity-20 pt-3">
      <BsMouse className="text-6xl text-slate-300" />
      <MdOutlineArrowDropDown className="text-4xl text-slate-300" />
    </div>
  );
};
