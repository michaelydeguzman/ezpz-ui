import React from "react";

interface NavigationButtonProps {
  text: string;
  onClick: () => void;
}
export const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className="cursor-pointer uppercase" onClick={onClick}>
      {text}
    </div>
  );
};
