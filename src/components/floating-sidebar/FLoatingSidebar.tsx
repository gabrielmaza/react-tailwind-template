import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./floating-sidebar.css";
import InputToggleSwitch from "../inputs/toggle-switch/InputToggleSwitch";
import { SidebarNav } from "./FLoatingSidebarNav";
import { SidebarContent } from "./FLoatingSidebarContent";
import { SidebarSection } from "./FLoatingSidebarSection";

interface FLoatingSidebarProps {
  toggleSidebar: any;
  handleClick: () => void;
}

const FLoatingSidebar = ({
  toggleSidebar,
  handleClick,
}: FLoatingSidebarProps) => {
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
          <SidebarSection hrBottom>
            <SidebarNav />
          </SidebarSection>
        </SidebarContent>
      </div>
      <div
        className={`custom-sidebar-overlay ${!toggleSidebar ? "hidden" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default FLoatingSidebar;
