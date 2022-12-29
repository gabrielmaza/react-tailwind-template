import { ChevronRightIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./sidebar.css";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import InputToggleSwitch from "../inputs/toggle-switch/InputToggleSwitch";
import { SidebarCategories } from "./SidebarCategories";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarTitle } from "./SidebarTitle";
import { SidebarNav } from "./SidebarNav";
import { SidebarContent } from "./SidebarContent";

interface SidebarProps {
  toggleSidebar: any;
  sidebarHeader?: any;
}

const Sidebar = ({ toggleSidebar, sidebarHeader }: SidebarProps) => {
  return (
    <div className="layout-sidebar flex flex-auto flex-col">
      <div
        // ref={divRef}
        className={`sidebar_wrapp ${!toggleSidebar && "hidden"}`}
      >
        <SidebarContent>
          {sidebarHeader && <SidebarHeader />}
          <SidebarTitle label="Pages" />
          <SidebarNav />
          <SidebarTitle label="Features" />
          <InputToggleSwitch label="Offers" />
          <InputToggleSwitch label="Toggle me" />
          <SidebarTitle label="Categories" />
          <SidebarCategories />
        </SidebarContent>
      </div>
      <div
        className={`custom-sidebar-overlay ${!toggleSidebar ? "hidden" : ""}`}
      />
    </div>
  );
};

export default Sidebar;
