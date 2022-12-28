import { ChevronRightIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./sidebar.css";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import InputToggleSwitch from "../inputs/toggle-switch/InputToggleSwitch";
import { SidebarCategories } from "./SidebarCategories";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarTitle } from "./SidebarTitle";
import { SidebarNav } from "./SidebarNav";

const Sidebar = (props) => {
  const [aside, setAside] = useState(false);
  const handleClick = () => setAside(!aside);
  const close = () => setAside(false);
  const [divRef] = useClickAwayDiv<HTMLDivElement>(close);

  return (
    <div className="layout-sidebar flex flex-auto flex-col">
      <div className="w-fit flex items-center" onClick={handleClick}>
        {!aside ? (
          <MenuAlt3Icon className="text-white w-7 cursor-pointer" />
        ) : (
          <XIcon
            className="text-white w-7 cursor-pointer"
            onClick={close}
            aria-hidden
          />
        )}
      </div>
      <div ref={divRef} className={`sidebar_wrapp ${!aside ? "hidden" : ""}`}>
        <XIcon
          className="absolute right-[-32px] text-white w-7 cursor-pointer"
          onClick={close}
          aria-hidden
        />
        <div className="sidebar-content">
          {/* Sidebar header */}
          <SidebarHeader />
          <SidebarTitle label="Features" />
          <SidebarNav />

          <SidebarTitle label="Features" />

          <InputToggleSwitch label="Offers" />

          <InputToggleSwitch label="Toggle me" />

          <SidebarTitle label="Categories" />

          <SidebarCategories />
        </div>
      </div>
      <div className={`custom-sidebar-overlay ${!aside ? "hidden" : ""}`} />
    </div>
  );
};

export default Sidebar;
