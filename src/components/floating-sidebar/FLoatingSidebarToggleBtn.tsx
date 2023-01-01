import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./floating-sidebar.css";

interface FloatingSidebarToggleProps {
  toggleSidebar: any;
  handleClick: () => void;
}

export const FloatingSidebarToggleBtn = ({
  toggleSidebar,
  handleClick,
}: FloatingSidebarToggleProps) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  return (
    <button
      type="button"
      className="px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-all"
      onClick={handleClick}
    >
      {!toggleSidebar ? (
        <MenuAlt3Icon className="mx-1 my-auto h-5" />
      ) : (
        <XIcon className="mx-1 my-auto h-5" />
      )}
    </button>
  );
};
