import { ChevronRightIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./sidebar.css";
import InputToggleSwitch from "../inputs/toggle-switch/InputToggleSwitch";
import { SidebarCategories } from "./SidebarCategories";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarTitle } from "./SidebarTitle";
import { SidebarNav } from "./SidebarNav";
import { SidebarContent } from "./SidebarContent";
import { SidebarSection } from "./SidebarSection";

interface SidebarProps {
  toggleSidebar: any;
  sidebarHeader?: any;
  handleClick: () => void;
}

const Sidebar = ({
  toggleSidebar,
  sidebarHeader,
  handleClick,
}: SidebarProps) => {
  return (
    <div className="layout-sidebar flex flex-auto flex-col">
      <div className={`sidebar_wrapp ${!toggleSidebar && "hidden"}`}>
        <SidebarContent>
          <button
            className="sidebar_mobile-close-btn"
            type="button"
            onClick={handleClick}
          >
            <XIcon />
          </button>
          {sidebarHeader && <SidebarHeader />}
          <SidebarSection hrBottom>
            <SidebarTitle label="Pages" />
            <SidebarNav />
          </SidebarSection>

          <SidebarTitle label="Features" />
          <InputToggleSwitch label="Offers" />
          <InputToggleSwitch label="Toggle me" />

          <SidebarTitle label="Categories" />
          <SidebarCategories />
        </SidebarContent>
      </div>
      <div
        className={`custom-sidebar-overlay ${!toggleSidebar ? "hidden" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Sidebar;
