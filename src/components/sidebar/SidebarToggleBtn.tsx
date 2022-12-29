import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

interface SidebarToggleProps {
  toggleSidebar: any;
  handleClick: () => void;
}

export const SidebarToggleBtn = ({
  toggleSidebar,
  handleClick,
}: SidebarToggleProps) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  return (
    <button
      type="button"
      className="bg-transparent border-transparent"
      onClick={handleClick}
    >
      {!toggleSidebar ? (
        <MenuAlt3Icon className="text-white w-7 cursor-pointer" />
      ) : (
        <XIcon className="text-white w-7 cursor-pointer" />
      )}
    </button>
  );
};
